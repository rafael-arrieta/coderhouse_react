import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter> 
      <div className="App">    
        <NavBar/>
        <Routes>
          <Route index path='/' element={<ItemListContainer/>}/>
          <Route index path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
