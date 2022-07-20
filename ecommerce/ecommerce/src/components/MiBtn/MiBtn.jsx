import './MiBtn.css';

const MiBtn = (props) => {
  return (
    <div>
      <button className="myButton">
        {props.contenido}
      </button>
    </div>
  );
};

export default MiBtn;
