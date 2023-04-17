import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";
import { Row } from "react-bootstrap";

const MealDetails = () => {
  const data = useLoaderData();
  const meal = data.meals[0];
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      <Meal meal={meal}></Meal>
    </Row>
  );
};

export default MealDetails;
