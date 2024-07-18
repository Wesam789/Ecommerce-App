import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import  { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';
import { Footer } from '../Components/Footer/Footer';

const Product = () => {
  const{all_items}=useContext(ShopContext);
  const {productId} = useParams();

  const product = all_items.find((e)=> e.id == Number(productId));
          
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts product={product}/>  
      <Footer/>
    </div>
  )
}
export default Product
