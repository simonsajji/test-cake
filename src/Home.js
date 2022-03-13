import React from 'react'
import {Link} from "react-router-dom";
import cake from "./PngItem_2473598.png"

const Home = () => {
  return (
    <div className='Home'>

        <div className='card'>

            <div className='img-container'> <img src={cake}></img></div>
            <div className='card-header'> Black Forest</div>
            <div className='price'>&#8377;800</div>
           <Link to="/cart" className='link'> <button   className='add-to-cart'>ADD TO CART</button> </Link> 

        </div>




    </div>
  )
}

export default Home;