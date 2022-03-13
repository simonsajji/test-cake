
import React from 'react'
import {Link} from "react-router-dom"

import {useState,useEffect} from "react"
import {useSelector,useDispatch } from "react-redux"

const Cart = () => {

  const name = useSelector((reduxStore)=>{
    return reduxStore.name;
  }) 

  const itemprice = useSelector((reduxStore)=>{
    return reduxStore.itemprice;
  })

  const dispatch = useDispatch();

  const dispatchAction = () => {
    dispatch({ type: "BUY" });
  };


  return (
    <div className='Cart'>
      <h1>My Cart</h1>
      <hr/>
      <div className="card">

          <div className='img-container'>ITEMS ADDED TO CART </div>
            <div className='card-header'> Item 1 - {name}</div>
            <div className='price'>&#8377;{itemprice}</div>
            <div className='price'>
              &emsp;<input type="radio" name='payment' value="child" /> <label htmlFor="child">CREDIT PAYMENT</label><br/>
              <input type="radio" name='payment' value="child" /> <label htmlFor="child">NET BANKING </label>
            </div>
           <Link to="/gateway" className='link'> <button  onClick={() => dispatchAction(itemprice)} className='add-to-cart'>BUY</button> </Link> 

      </div>
      
      </div>
  )
}

export default Cart;