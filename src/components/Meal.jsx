import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idMeal, strMealThumb, strCategory, strMeal, strInstruction } = meal;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>
            {strMeal} <small>{strCategory}</small>
          </Card.Title>
          <Card.Text>{strInstruction}</Card.Text>
        </Card.Body>
        <Link to={`/meal/${idMeal}`}> Details</Link>
      </Card>
    </Col>
  );
};

export default Meal;
