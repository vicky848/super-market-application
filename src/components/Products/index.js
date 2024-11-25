import Home from "../Home"
import Footer from "../Footer"
import './index.css'

const Products = ({addToCart}) => {

// "Each product displays details like price, category, and rating.
//  Clicking 'Add to Cart' updates the cart count."


  return (
    <div className='product-container'>
    
       <Home addToCart={addToCart} />
       <Footer/>
    </div>
  )
}

export default Products
