import Button from "react-bootstrap/Button";
import './MiBtn.css';

function Alerta(parametro) {
  alert(parametro);
}

const MiBtn = (props) => {
  return (
    <div>
      <Button className="hola" variant="primary" onClick={props.handleClick}>
        {" "}
        {props.contenido}{" "}
      </Button>
    </div>
  );
};

export default MiBtn;
