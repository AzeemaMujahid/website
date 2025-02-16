import React, {createContext, useState} from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

    const getDefaultCart = ()=>{
        let cart ={};
        for (let index = 0; index < all_product.length+1; index++){
            cart[index] =0;
        }
        return cart;
    }
    const ShopContextProvider =(props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart());

    // save data we want to access using context
   
 
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
// for total
const getTotalCartAmount = () => {
    return all_product.reduce((total, product) => {
      if (cartItems[product.id] > 0) {
        return total + (product.new_price * cartItems[product.id]);
      }
      return total;
    }, 0);

    }
    
    // cart number show
    const getTotalCartItems =()=>{
        let totalItem =0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem
    }    


    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    


    return (
        // from here we get data
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;