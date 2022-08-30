import './ItemList.css'
import Item from '../Item/Item'

// This component is responsible for mapping each product
const ItemList = ({products}) => {
	return (
		<div className="contenedor">
		{
			products?.map (products => <Item key={products.id} prod={products}/>)
		}
		</div>
	)
}

export default ItemList