import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const AllMeals = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState({ query: "", list: [] });

  const handleChange = (e) => {
    const result = data.meals.filter((meal) => {
      if (e.target.value === "") {
        return data.meals;
      }
      return meal.strMeal.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchTerm({
      query: e.target.value,
      list: result,
    });
  };
  return (
    <div className="mx-5">
      <input onChange={handleChange} value={searchTerm.query} type="search" />
      <ul>
        {searchTerm.query === ""
          ? ""
          : searchTerm.list.map((item, idx) => {
              return <li key={idx}>{item.strMeal}</li>;
            })}
      </ul>
      <Row xs={1} md={2} lg={3} className="g-4">
        {data.meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </Row>
    </div>
  );
};

export default AllMeals;
