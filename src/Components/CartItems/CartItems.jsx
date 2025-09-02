import React, { useContext } from 'react'
import './CartItems.css'
import {ShopContext} from '../../Context/ShopContext'
import remove from '../data/remove.svg';

export const CartItems = () => {
    const {getCartTotal, all_items, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartItems'>
        <div className='cartItems-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_items.map((e)=>{
            if(cartItems[e.id]>0) {
                return <div>
                <div className="cartItems-format cartItems-main">
                    <img className='carticon-prod' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartItems-remove'src={remove} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cart-down">
            <div className="cart-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="total-item">
                        <p>Subtotal</p>
                        <p>${getCartTotal()}</p> 
                    </div>
                    <hr />
                    <div className="total-item">
                        <p>Shipping Fee</p>
                        <p>$7</p>
                    </div>
                    <hr />
                    <div className="total item">
                        <h3>Total</h3>
                        <h3>${getCartTotal()+7}</h3>
                    </div>
                </div>
                <button>CHECKOUT</button>
            </div>
            <div className="promocode">
                <p>Enter Promo Code</p>
                <div className="promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
