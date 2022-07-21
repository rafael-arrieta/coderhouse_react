import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <BrowserRouter> 
      <div className="App">    
        <NavBar/>
        <Routes>
          <Route index path='/' element={<ItemListContainer/>}/>
          <Route index path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetail/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
