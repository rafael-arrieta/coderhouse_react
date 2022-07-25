
import { Component, useState } from "react";
import './contador.css'

const Contador = (props) => {
  const [contador, setContador] = useState(props.intial);

  function limiteStock(){
    if(contador < props.stock){
      setContador(contador+1)
      }}
  function limiteIntial(){
    if(contador > props.intial){setContador(contador-1)}
  }
  

  return (
      <div className="contador-container">
          <button className="btn-contador izquierdo" onClick={limiteIntial}>-</button>
          <p className="text-contador" >Cantidad: {contador}</p>
          <button className="btn-contador derecho" onClick={limiteStock}>+</button>
      </div>
  )
};

export default Contador