import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import './index.css'
const Headers = ({cartCount}) => {
return (
<nav className='navbar-container'>
    <ul className='super-list-container'>
        <li className='super-list'>SUPER MARKET</li>
    </ul>
    <ul className='navbar-list-container'>
    <Link to ='/'><li className='navbar-list-item'>HOME</li></Link>
    <Link to ='/product'><li className='navbar-list-item'>PRODUCT</li></Link>
    <Link to ='/about'><li className='navbar-list-item'>ABOUT US</li></Link>
    <Link to ='/contact'><li className='navbar-list-item'>CONTACT</li></Link>
</ul>
<ul className='cart-list-container'>
<Link to = "/cart" className='link-cart'> <li className='navbar-list-item icon-cart' >
<FaCartPlus/>
{cartCount > 0 && <span className='cart-count'>{cartCount}</span>}

</li></Link>
</ul>
   
  
</nav>
)
}

export default Headers
