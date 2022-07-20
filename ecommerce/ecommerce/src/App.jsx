import './App.css';
import { BrowserRouter, router, route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

import Contador from './components/contador/Contador';
import ItemListContainer from './components/itemListContainer/ItemListContainer';


function App() {
  return (
    <BrowserRouter> 
      <div className="App">
          
        <NavBar/>
        <ItemListContainer/>
        <Contador/>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
