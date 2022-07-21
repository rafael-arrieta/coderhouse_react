
import { Component, useState } from "react";
import './contador.css'




const Contador = () => {
    
  const [contador, setContador] = useState(1);

  function limiteStock(){
    if(contador < 10){setContador(contador+1)}
  }
  function limiteInicial(){
    if(contador>1){setContador(contador-1)}
  }

  return (
    <div className="contador-container">
        <button className="btn-contador izquierdo" onClick={limiteInicial}>-</button>

        <p className="text-contador" >Cantidad: {contador}</p>
    
        <button className="btn-contador derecho" onClick={limiteStock}>+</button>
    </div>
  )
};

export default Contador;