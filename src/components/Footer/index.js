import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import './index.css'

const Footer = () => {
return (

    <div className='footer-container'>
        <div className='footer-contact'>
            <h3>Contact Us</h3>
            <p>Email : supermarket@gmail.com</p>
            <p>phone: +91 8080808080</p>
            <p>Address: 123, Main Street , Delhi</p>

            <div className='footer-copy-right'>
            <p className='copy-right'>&copy; 2024 Supermarket.  All right reserved.</p>

             </div>

            </div>

            <div className='footer-link'>
            <h3>Quick Link</h3>
        <ul className='footer-un-order-list'>
        <li><a href='/' className='link-item'>Home</a></li>   
        <li><a href='/about' className='link-item'>About Us</a></li>
        <li><a href='/blogs' className='link-item'>Blogs</a></li>
        <li><a href='/contact' className='link-item'>Contact</a></li>
        <li><a href='/shop'className='link-item'>Shop</a></li>
        </ul>
            </div>


        <div className='footer-policies'>
        <h3>Policies</h3>
        <ul className='footer-un-order-list'>
        <li><a href='/privacy-policies'className='link-item'>Privacy Policies</a></li>   
        <li><a href='/term-of-service'className='link-item'>Term of Service</a></li>
        <li><a href='/return-policy'className='link-item'>Return Policy</a></li>
        </ul>
            </div>

               
       
         
            <div>
            <h1 className='social-media-heading'>Social Media</h1>
                
               <div  className='social-media'>
               <div className='facebook'>
                <FaFacebookSquare className='facebook-icon' />
                </div>
                <div className='insta' >
                <SiInstagram  className="instagram-icon"/>
                </div>
                <div className='twitter'>
                <FaTwitter className="twitter-icon" />
                </div>
               </div>
            </div>
         
     

         </div>

 
   
  
   
   

)
}

export default Footer
