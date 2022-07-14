import Button from 'react-bootstrap/Button';

function Alerta(parametro){
    alert(parametro);
}

const MiBtn = (props) => {
  return (
    <div>
        <Button variant="primary" onClick={()=>Alerta(props.mensaje)}> {props.contenido} </Button>
    </div>
  )
}

export default MiBtn