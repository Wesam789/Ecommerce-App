import React, { createContext, useState } from 'react'
import all_items from '../Components/data/all_items';

export const ShopContext = createContext();
const getDefaultCart = () => {
    let cart = {};
    for (let i=0; i<all_items.length; i++) {
        cart[i] = 0
    }
    return cart;
}
const ShopProvider = (items) => {
    const [cartItems, setItems] = useState(getDefaultCart());

    const addToCart = (itemId) =>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeFromCart = (itemId) =>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getCartTotal = () => {
        let total = 0;
        for(const item in cartItems){
            if (cartItems[item]>0) {
                let itemInfo = all_items.find((product)=>product.id===Number(item));
                total += itemInfo.new_price * cartItems[item];
            }
            
        }
        return total;
        
    }

    const getTotalCartItems = () =>{
        let totalItems = 0;
        for(const item in cartItems){
            if (cartItems[item]>0){
                totalItems+=cartItems[item];
            }
        }
        return totalItems;

    }

    

    const itemsValue = {getTotalCartItems, getCartTotal, all_items,cartItems, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={itemsValue}>
            {items.children}
        </ShopContext.Provider>
    )
}

export default ShopProvider;