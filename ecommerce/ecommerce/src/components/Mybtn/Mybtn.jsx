import "./Mybtn.css";

// Standard button used in the components
const Mybtn = (props) => {
  return (
    <div>
      <button className="myButton">{props.content}</button>
    </div>
  );
};

export default Mybtn;
