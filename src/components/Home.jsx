import React, { useEffect, useState } from "react";
import { Button, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Meal from "./Meal";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const handleClick = async () => {
  //   try {
  //     const data = await (
  //       await fetch(`https://jsonplaceholder.typicode.com/albums/${searchTerm}`)
  //     ).json();
  //     setData(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setData(data.meals));
  }, [searchTerm]);
  return (
    <div>
      <h3>Home</h3>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search your meal"
          aria-label="Search your meal"
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-primary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
      {data && (
        <Row xs={1} md={2} lg={3} className="g-4">
          {data.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
