import { useCartContext } from "../../Context/CartContext";
import Mybtn from "../Mybtn/Mybtn";
import { Link } from "react-router-dom";
import {
    addDoc,
    collection,
    documentId,
    getDocs,
    getFirestore,
    query,
    where,
    writeBatch,
} from "firebase/firestore";
import "./Cart.css";
import { useState } from "react";

// This component finalizes the purchase in the e-commerce

const Cart = () => {
    // Call to context provider
    const { cartList, clearCart, removeFromCart, getPriceTotal } =
        useCartContext();
    const [id, setId] = useState("");
    // This function creates the object that records the buyer data in FirebaseApp
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        phone: "",
        rEmail: ""
    });

    // This function makes the call to function that validates inputs and enables the button to finalize the purchase
    const errorMessage = validateData(
        getPriceTotal(),
        formData.name,
        formData.phone,
        formData.email,
        formData.rEmail
    );

    // This function interacts with FirebaseApp and generates the order, registers the buyer and discounts the stock

    const finishBuying = async (e) => {
        e.preventDefault();

        const order = {};
        order.buyer = formData;
        order.items = cartList.map((prod) => {
            return {
                product: prod.name,
                id: prod.id,
                price: prod.price,
                quantity: prod.quantity,
            };
        });
        order.total = getPriceTotal();

        const db = getFirestore();
        const queryOrders = collection(db, "orders");
        addDoc(queryOrders, order).then((resp) => setId(resp.id));

        const queryCollectionStock = collection(db, "items");

        const queryRefreshStock = query(
            queryCollectionStock,
            where(
                documentId(),
                "in",
                cartList.map((it) => it.id)
            )
        );

        const batch = writeBatch(db);

        await getDocs(queryRefreshStock)
            .then((resp) =>
                resp.docs.forEach((res) =>
                    batch.update(res.ref, {
                        stock:
                            res.data().stock -
                            cartList.find((item) => item.id === res.id)
                                .quantity,
                    })
                )
            )
            .catch((err) => console.log(err))
            .finally(() => {
                clearCart();
                setFormData({
                    email: "",
                    name: "",
                    phone: "",
                    rEmail: "",
                });
            });
        batch.commit();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="cart-container">
            {id.length > 0 ? (
                <p className="text-cart">El ID de tu compra es: {id}</p>
            ) : (
                <>
                    <div className="cart-lista">
                        <div className="cart-head">
                            <p className="cart-titulo">Carrito</p>
                            {cartList.map((item) => (
                                <div className="cart-table" key={item.id}>
                                    <div className="elemento-lista-1">
                                        {item.name}- {item.category}
                                    </div>
                                    <div className="elemento-lista-1">
                                        price Unit: $ {item.price} x{" "}
                                        {item.quantity}{" "}
                                    </div>
                                    <div className="elemento-lista-2">
                                        Subtotal = ${" "}
                                        {item.price * item.quantity}
                                    </div>
                                    <div className="elemento-lista-3">
                                        <button
                                            className="eliminar-item"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-foot">
                            {getPriceTotal() === 0 ? (
                                <>
                                    <p className="text-cart">
                                        NO HAY PRODUCTOS EN TU CARRITO
                                    </p>
                                    <div className="cart-buttons">
                                        <Link to="/">
                                            <Mybtn content={"Iniciar compra"} />
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="cart-buttons">
                                        <p className="text-cart">
                                            price total: ${getPriceTotal()}
                                        </p>
                                    </div>
                                    <div className="cart-buttons">
                                        <button
                                            className="myButton"
                                            onClick={clearCart}
                                        >
                                            {" "}
                                            Vaciar Carrito
                                        </button>
                                        <Link to="/">
                                            <Mybtn
                                                content={"Seguir comprando"}
                                            />
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
            <div className="cart-form">
                <div className="cart-form-head">
                    <h4>FORMULARIO</h4>
                </div>
                <div className="cart-form-box">
                    <form className="form-display" onSubmit={finishBuying}>
                        <p className="text-form">Name:</p>
                        <input
                            className="input-form"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            value={formData.name}
                        />
                        <p className="text-form">Phone</p>
                        <input
                            className="input-form"
                            name="phone"
                            type="Phone"
                            onChange={handleChange}
                            value={formData.phone}
                        />
                        <p className="text-form">Email:</p>
                        <input
                            className="input-form"
                            name="email"
                            type="Email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <p className="text-form">Confirmar email:</p>
                        <input
                            className="input-form"
                            name="rEmail"
                            type="Email"
                            onChange={handleChange}
                            value={formData.rEmail}
                        />
                        <p>{errorMessage}</p>
                        <input
                            className="button-form"
                            disabled={errorMessage}
                            type="submit"
                            value="Enviar"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};
// This function validates that the user has made a purchase and validates the fields of the inputs
const validateData = (total, name, phone, email, rEmail) => {
    if (
        total === 0 ||
        name === "" ||
        phone === "" ||
        email === "" ||
        rEmail === ""
    )
        return "-";
    if (name.length < 4) return "ingresá un nombre correcto";
    if (phone.length !== 10) return "ingresá un teléfono válido";
    if (!email.includes("@") || !email.includes(".com"))
        return "email incorrecto";
    if (email !== rEmail) return "confirmar mail correctamente";
};

export default Cart;
