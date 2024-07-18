import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = (prod) => {
  return (
    <div className ='item'>
        <Link to={`/product/${prod.id}`}><img onClick={() => window.scrollTo(0,0)} src={prod.image} class='item-logo' alt="" /></Link>
        <p>{prod.name}</p>
        <div className='item-prices'>
            <div className='item-new-price'>
                ${prod.old_price}
            </div>
            <div className='item-old-price'>
                ${prod.new_price}
            </div>

        </div>
    </div>
  )
}

export default Item;
