import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (prod) => {
    const {addToCart} = useContext(ShopContext);
    prod = prod.product;
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={prod.image} alt="" />
                <img src={prod.image} alt="" />
                <img src={prod.image} alt="" />
                <img src={prod.image} alt="" />
            </div> 
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={prod.image} alt="" />
            </div>
        </div>  
        <div className='productdisplay-right'>
            <h1>{prod.name}</h1>
            <div className="productdisplay-right-star">
                <img src= "../pics/star-solid.svg" alt="" />
                <img src= "../pics/star-solid.svg" alt="" />
                <img src= "../pics/star-solid.svg" alt="" />
                <img src= "../pics/star-solid.svg"alt="" />
                <img src= "../pics/star-open.svg" alt="" />
                <p>(96 Reviews)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className="productdisplay-right-price-old">${prod.old_price}</div>
                <div className="productdisplay-right-price-new">${prod.new_price}</div>
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(prod.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category : </span>Tops, Jackets, T-Shirts</p>
            <p className='productdisplay-right-category'><span>Tags : </span>Modern, Newest</p>
        </div>
    </div>
  )
}
export default ProductDisplay
