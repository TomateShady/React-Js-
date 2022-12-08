
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { CartContextProvider } from "./context/cartContext";
import CartView from './components/CartView/CartView';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element= { <ItemListContainer />} />      
        <Route path='/detail/:idItem' element= { <ItemDetailContainer />} />      
        <Route path= '/cart' element= {<CartView />} />
        <Route path="*" element= { <h1>Error 404: Esta página no existe </h1>} />      
      </Routes>        
      </BrowserRouter>
    </CartContextProvider>
  );
}


export default App;





