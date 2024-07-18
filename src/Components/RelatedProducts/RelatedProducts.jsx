import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import data_prod from '../data/data'
import data_prod2 from '../data/data2'
import data_prod3 from '../data/data3'

export const RelatedProducts = (prod) => {
  prod = prod.product;
  let dataToShow;

  if (prod.category == "tops") {
    dataToShow = data_prod;
  } else if (prod.category == "pants") {
    dataToShow = data_prod2;
  } else if (prod.category == "accessories") {
    dataToShow = data_prod3;
  } 

  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
          {dataToShow.map((item,i)=>{ 
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
          
          
        </div>
    </div>
  )
}
