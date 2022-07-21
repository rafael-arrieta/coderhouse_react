import './App.css';
import { BrowserRouter, router, route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

import Contador from './components/contador/Contador';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <BrowserRouter> 
      <div className="App">
          
        <NavBar/>
        <ItemListContainer/>
        <Contador/>
        <ItemDetail/>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
