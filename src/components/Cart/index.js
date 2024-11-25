import React from 'react'

import CartList from '../CartList'

import './index.css'

const Cart = ({cartItems,  removeFromCart}) => {

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0)
  return (
  
    <div className ="cart-container">
        <h3 className='cart-heading'>Your Cart</h3>
        {
            cartItems.length === 0 ? (
                <p>Your cart is empty !</p>
            ):(
              <ul className='ul-cart-container'>
                {cartItems.map((item)=>(
                    <CartList
                    key = {item.id}
                    cartDetails = {item}
                    removeFromCart = {removeFromCart}
                    />

                ))}
              </ul>
              

          

            )
        }
        <div className='total-amount-container'>
            <p className='total-amount'>Total : {totalAmount}</p>

        </div>

      
    </div>
  )
}

export default Cart
