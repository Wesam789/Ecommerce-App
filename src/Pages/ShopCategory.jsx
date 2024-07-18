import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import { Footer } from '../Components/Footer/Footer'

const ShopCategory = (items) => {
    const {all_items} = useContext(ShopContext);
    return (
        <div className = 'shop-category'>
            <img className = 'banner' src={items.banner} alt="" />
            <div className='shopcategory-index'>
                <p>
                    <span>Showing 1-12</span> out of 12 Products
                </p>
            </div>
            <div className = 'shopcategory-items'>
                {all_items.map((item,i)=>{
                    if (items.category===item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else {
                        return null;
                    }
                })}
            </div>  
            <div className='footerShop'>
                <Footer/>
            </div>
        </div>
  )
}

export default ShopCategory;
