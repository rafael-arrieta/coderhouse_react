import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({intial, stock, onAdd}) => {
  const [count, setCount] = useState(intial);
  const [disponibles, setDisponibles] = useState(stock-1);
  
 const itemSuma =()=>{
    if(count < stock){
      setCount(count+1)
      setDisponibles(disponibles-1)
    }
  }

  const itemResta =()=>{
    if (count > intial){
      setCount(count-1)
      setDisponibles(disponibles+1)
    }
  }

  const AddItemToCart = ()=> {
    onAdd(count)
  }

  
  
  return (
    <>
      <div className="ItemCount-container">
        <div className="ItemCount-buttons">
            <button className="btn-contador izquierdo" onClick={itemResta}>-</button>
            <p className="text-ItemCount" >Cantidad: {count} </p>
            <button className="btn-contador derecho" onClick={itemSuma}>+</button>
        </div>
        <div className="ItemCount-container">
          <button className='btn-agregar' onClick={AddItemToCart}>Agregar</button>
          <p>disponibles: {parseInt(disponibles)}</p>
        </div>
      <div className="ItemCount-container"></div>
    </div>
  </>
  )
};

export default ItemCount