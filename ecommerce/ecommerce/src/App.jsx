import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './Context/CartContext';
import Cart from './components/Cart/Cart';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter> 
      <CartContextProvider>
        <div className="App">    
          <NavBar/>
          <Routes>
            <Route index path='/' element={<ItemListContainer/>}/>
            <Route index path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
            <Route path='/cart'element={<Cart/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
 