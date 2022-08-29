import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import Mybtn from "../Mybtn/Mybtn";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCartContext();
  const [showCount, setShowCount] = useState(true);

  const onAdd = (quant) => {
    setShowCount();
    addToCart({ ...product, quantity: quant });
  };

  return (
    <div className="container-detail">
      <img className="container-image" src={product.image} alt="" />
      <div className="container-description">
        <h1 className="h1-detail">{product.name}</h1>
        <h2 className="h2-detail">
          Descripcion del producto: Juguete {product.category}
        </h2>
        <h3 className="h3-detail">price unitario: ${product.price}</h3>
        <p>Stock: {product.stock} unidades</p>
        <div className="container-compra">
          {showCount ? (
            <ItemCount intial={1} stock={product.stock} onAdd={onAdd} />
          ) : (
            <>
              <Link to="/cart">
                <Mybtn content={"Terminar Compra"} />
              </Link>
              <Link to="/">
                <Mybtn content={"Seguir comprando"} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
