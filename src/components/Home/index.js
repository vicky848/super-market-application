import React, { useState , useEffect} from 'react'
import ProductList from '../ProductList'
import './index.css'

// "Here's the Navbar with navigation links. 
// The cart icon dynamically updates to reflect the number of items in the cart. On the Home page, 
// products are fetched from an API.
//  You can filter them by categories like men's clothing, women's clothing, etc.




const Home = ({addToCart} )=> {

  const [productItem, setProductItem] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [selectCategory, setSelectCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
      const fetchProduct = async ()=> {
      
          try {
      
      const response = await fetch ("https://fakestoreapi.com/products")
      const data = await response.json()
      setProductItem(data)
      setFilterProduct(data)
      
          }catch(error){
              console.error("Error fetching products", error)
          } finally {
            setLoading(false)
          }
      
      
      }
      
      
      
      
      fetchProduct()
      
      
      }, [])
      
      if (loading){
        return <div>Loading...</div>;
      };
      
  
  
  
  
  
  const handleCategory = (event) => {
  
    const  category =  event.target.value
  
    setSelectCategory(category)
  
  if (category === "all"){
    setFilterProduct(productItem)
  }else{
    const filtered = productItem.filter((product)=> product.category === category);
    setFilterProduct(filtered)
  }
  
  
  
  
  }
  
  
  
  
  
  
  








  return (
    <div>
       <div className='category-container'>

<h1 className='category-heading'>Category</h1>
<select className='selector' value={selectCategory} onChange={handleCategory}>
 <option value="all">ALL</option>
<option value="men's clothing">men's clothing</option>
<option value="women's clothing">women's clothing</option>
<option value="electronics">electronics</option>

<option value="jewelery">jewelery</option>
</select>

</div>


   <ul className='product-card-container'>
       {
         filterProduct.map((product) => (
           <ProductList
           key = {product.id}
           productDetails = {product}
           addToCart = {addToCart}


           />
         ))
       }

   </ul>



      
    </div>
  )
}

export default Home
