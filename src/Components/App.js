
import './App.css';
import {Navbar} from '../Components/Navbar/Navbar';
import {Footer} from '../Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from '../Pages/Home';
import ShopCategory from '../Pages/ShopCategory';
import Product from '../Pages/Product';
import { Cart } from '../Pages/Cart';
/*
import tops_banner from './Components/pics/topsBanner.png';
import pants_banner from './Components/pics/pantsBanner.png';
import accessories_banner from './Components/pics/accessoriesBanner.png';
*/

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
