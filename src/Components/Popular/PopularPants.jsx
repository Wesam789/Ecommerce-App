import React from 'react'
import './PopularPants.css'
import popular_data2 from '../data/data2'
import Item from '../Item/Item'

export const PopularPants = () => {
  return (
    <div className='popular2'>
      <h1>POPULAR PANTS</h1>
      <hr/>
      <div className="items_popular2">
        {popular_data2.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default PopularPants;
