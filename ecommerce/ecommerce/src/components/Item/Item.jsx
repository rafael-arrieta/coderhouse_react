import Mybtn from "../Mybtn/Mybtn";
import "./Item.css";
import { Link } from "react-router-dom";

const CardItem = ({ prod }) => {
  return (
    <div className="card-item">
      <img className="card-image" src={prod.image} alt="" />
      <div className="card-descript">
        <h1 className="h1-card"> {prod.name}</h1>
        <h3 className="h3-card">Juguete: {prod.category}</h3>
        <h2 className="h2-card">$ {prod.price}</h2>
        <Link to={`/detail/${prod.id}`}>
          <Mybtn content="detalle" />
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
