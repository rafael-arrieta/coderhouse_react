import { useState } from "react";
import "./ItemCount.css";

// The component Counter setting the quantity of products for purchase
const ItemCount = ({ intial, stock, onAdd }) => {
    const [count, setCount] = useState(intial);
    const [aviable, setAviable] = useState(stock - 1);

    const itemIncrease = () => {
        if (count < stock) {
            setCount(count + 1);
            setAviable(aviable - 1);
        }
    };
    const itemDecrease = () => {
        if (count > intial) {
            setCount(count - 1);
            setAviable(aviable + 1);
        }
    };
    const AddItemToCart = () => {
        onAdd(count);
    };

    return (
        <>
            <div className="ItemCount-container">
                <div className="ItemCount-buttons">
                    <button
                        className="btn-contador izquierdo"
                        onClick={itemDecrease}
                    >
                        -
                    </button>
                    <p className="text-ItemCount">Cantidad: {count} </p>
                    <button
                        className="btn-contador derecho"
                        onClick={itemIncrease}
                    >
                        +
                    </button>
                </div>
                <div className="ItemCount-container">
                    <button className="btn-agregar" onClick={AddItemToCart}>
                        Agregar
                    </button>
                    <p>disponibles: {parseInt(aviable)}</p>
                </div>
                <div className="ItemCount-container"></div>
            </div>
        </>
    );
};

export default ItemCount;
