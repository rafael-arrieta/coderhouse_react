import MiBtn from "../MiBtn/MiBtn";
import './CardItem.css'


const CardItem = (props) => {
  return (
    <div className="card">
        <image className="card-image"/>
        <h2>{props.nombre}</h2>
        <h3>$ {props.precio}</h3>
        <MiBtn contenido="detalle"/>
    
    </div>


  );
};

export default CardItem;
