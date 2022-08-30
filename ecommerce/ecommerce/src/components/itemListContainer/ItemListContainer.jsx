import { useState, useEffect } from "react";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

// This component makes calls to FirebaseApp and gets the collection
const ItemListContainer = ({ load }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "items");

        // Conditional that filters and sendns parameters to the function that gets the FirebaseApp collection
        if (categoryId) {
            const queryFiltered = query(
                queryCollection,
                where("category", "==", categoryId)
            );
            getItemListFromDB(queryFiltered);
        } else {
            getItemListFromDB(queryCollection);
        }
    }, [categoryId]);

    //This function calls FirebaseApp based on the parameters received
    const getItemListFromDB = (query) => {
        getDocs(query)
            .then((resp) =>
                setProducts(
                    resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
                )
            )
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    //The return contains a conditional that displays the <Loading/> component while waiting for FirebaseApp to respond
    return (
        <>
            {load}
            {loading ? <Loading /> : <ItemList products={products} />}
        </>
    );
};

export default ItemListContainer;
