import React from 'react'
import './index.css'

const ProductList = ({productDetails ,addToCart}) => {
   

   const {title, price, category, image, rating} = productDetails

const handleCart = () => {

addToCart(productDetails)

  
}


    
  return (
    <div>
    <li className='list-container'>
     
      <img  src={image} alt={title} className='image'/>
      
      <h1 className='product-heading'>{title}</h1>
      <p className='product-price'>$ {price}</p>
      
      <p className='product-category'>{category}</p>
      <p className='product-rating'>Rating {rating.rate}({rating.count})</p>
       <button className='buy-button' onClick={handleCart}>Add To Cart</button>   
    
          
    </li>
    </div>  
  )
}

export default ProductList
