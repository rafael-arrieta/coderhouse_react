import MiBtn from "../MiBtn/MiBtn";
import './CardItem.css'


const CardItem = (props) => {
  return (
    <div className="card">
        <image className="card-image" src="./01_conejo.png" alt=''/>
        <h2>{props.nombre}</h2>
        <h4>Juguete: {props.categoria}</h4>
        <h3>$ {props.precio}</h3>
        <MiBtn contenido="detalle"/>
    </div>


  );
};

export default CardItem;
