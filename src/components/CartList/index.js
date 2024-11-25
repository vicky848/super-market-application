import React from 'react'
import './index.css'

const CartList = props => {

    const {cartDetails, removeFromCart} = props
    const {image, title, price, id} = cartDetails


    const handleRemove = ()=> {
        removeFromCart(id)

    }

    return (
    <li className='cart-list-item'>
      
      <img src={image} alt = {title} className='cart-image'/>
      <p className='cart-title'>{title}</p>
      <p className='cart-price'>{price}</p>

      <div>
        <button className='buy-cart-button'>Buy</button>
        <button className='remove-cart-button' onClick = {handleRemove}>Remove</button>
      </div>


    </li>
  )
}

export default CartList
