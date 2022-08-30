import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

// this component renders the datail of each product also calls the database and gets the requested item
const ItemDetailContainer = ({ load }) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { detailId } = useParams();
	
	// FirebaseApp calls
    useEffect(() => {
        const db = getFirestore();
        const queryProduct = doc(db, "items", detailId);
        getDoc(queryProduct)
            .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [detailId]);

	//The return contains a conditional that displays the <Loading/> component while waiting for FirebaseApp to respond
    return (
        <>
            {load}
            {loading ? <Loading /> : <ItemDetail product={product} />}
        </>
    );
};

export default ItemDetailContainer;
