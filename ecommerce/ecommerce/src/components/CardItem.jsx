import MiBtn from "./MiBtn/MiBtn";
import Card from "react-bootstrap/Card";
import { Component, useState } from "react";

const CardItem = () => {
  const [contador, setContador] = useState(0);

  return (
    <Card className="col-xs-12 col-md-6 col-lg-3">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.{" "}
        </Card.Text>
        <Card.Text>contador = {contador}</Card.Text>
        <MiBtn
          contenido="botoncito"
          handleClick={() => setContador(contador + 1)}
        />
      </Card.Body>
    </Card>
  );
};

export default CardItem;
