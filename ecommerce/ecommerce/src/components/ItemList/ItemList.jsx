import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({productos}) => {
  return (
    <div className="contenedor">
        {
        productos?.map (productos => <Item key={productos.id} prod={productos}/>)
      }
    </div>
  )
}

export default ItemList