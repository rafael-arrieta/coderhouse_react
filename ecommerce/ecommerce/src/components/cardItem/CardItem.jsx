import MiBtn from "../MiBtn/MiBtn";
import './CardItem.css'
import {Link} from 'react-router-dom'

const CardItem = (props) => {

  return (
    <div className="card">
        <img className="card-image" src={props.imagen} alt=''/>
        <h1 className="h1-card"> {props.nombre}</h1>
        <h3 className="h3-card">Juguete: {props.categoria}</h3>
        <h2 className="h2-card">$ {props.precio}</h2>
        <Link to={`/detalle/${props.id}`}>
          <MiBtn contenido="detalle"/>
        </Link>
    </div>
  );
};

export default CardItem;
