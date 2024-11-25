import { useState } from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';


import Headers from './components/Headers';
import './App.css';
import Products from './components/Products';

import Cart from './components/Cart';

// "Hi, this is a demonstration of the Supermarket web application built using React.
//  This app allows users to browse products, filter them by categories,
//   add items to the cart, and view the cart with the total amount." 





const App = ()  => {

  
const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); 
  
    if (isItemInCart) {
    setCartItems(
        cartItems.map((cartItem) => 
        cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    );
    } else {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };



const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
 const removeFromCart = (itemId) => {
  setCartItems(cartItems.filter((cartItem)=> cartItem.id !== itemId))
 }

  return (


    <Router>
          <Headers cartCount = {cartCount}/>
          <Routes>
          <Route exact path='/' element ={ <Products addToCart = {addToCart}/>}/>
          <Route exact path='/cart' element = {<Cart cartItems = {cartItems} removeFromCart = {removeFromCart}/>}/>


          </Routes>
          

    </Router>


   
  
     
      
      
      
      
   
  );
}

export default App;

// "This project demonstrates dynamic product fetching, filtering,
//  and cart management using React. Thank you for watching.