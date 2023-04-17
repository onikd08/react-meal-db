import React, { useEffect, useState } from "react";
import { Button, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Meal from "./Meal";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = async () => {
    try {
      const data = await (
        await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        )
      ).json();
      setData(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setData(data.meals));
  }, [searchTerm]);
  return (
    <div className="mx-5">
      <h3>Home</h3>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search your meal"
          aria-label="Search your meal"
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          onClick={handleClick}
          variant="outline-primary"
          id="button-addon2"
        >
          Button
        </Button>
      </InputGroup>
      {data ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {data.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </Row>
      ) : (
        <div> Could not find the meal </div>
      )}
    </div>
  );
};

export default Home;
