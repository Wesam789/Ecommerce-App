import React from 'react'
import './PopularAccessories.css'
import popular_data3 from '../data/data3'
import Item from '../Item/Item'

export const PopularAccessories = () => {
  return (
    <div className='popular3'>
      <h1>POPULAR ACCESSORIES</h1>
      <hr/>
      <div className="items_popular3">
        {popular_data3.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default PopularAccessories;
