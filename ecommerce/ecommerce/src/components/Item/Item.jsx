import MiBtn from "../MiBtn/MiBtn";
import './Item.css'
import {Link} from 'react-router-dom'

const CardItem = ({prod}) => {

  return (
    <div className="card">
        <img className="card-image" src={prod.imagen} alt=''/>
        <div className="card-descript">
          <h1 className="h1-card"> {prod.nombre}</h1>
          <h3 className="h3-card">Juguete: {prod.categoria}</h3>
          <h2 className="h2-card">$ {prod.precio}</h2>
          <Link to={`/detalle/${prod.id}`}>
            <MiBtn contenido="detalle"/>
          </Link>
        </div>
    </div>
  );
};

export default CardItem;
