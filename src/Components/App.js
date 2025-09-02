
import './App.css';
import {Navbar} from '../Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Home from "../Pages/Home.jsx";
import ShopCategory from "../Pages/ShopCategory.jsx";
import Product from "../Pages/Product.jsx";
import Cart from "../Pages/Cart.jsx";

function App() {
  return (  
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tops' element={<ShopCategory /*banner={tops_banner}*/ category ="tops"/>}/>
          <Route path='/pants' element={<ShopCategory /*banner={pants_banner}*/ category="pants"/>}/>
          <Route path='/accessories' element={<ShopCategory /*banner={accessories_banner}*/ category="accessories"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path='/product/:productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
