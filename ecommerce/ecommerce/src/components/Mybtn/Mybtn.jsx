import "./Mybtn.css";

const Mybtn = (props) => {
  return (
    <div>
      <button className="myButton">{props.content}</button>
    </div>
  );
};

export default Mybtn;
