import React from 'react'
import {useState,useEffect} from "react"
import {useSelector,useDispatch } from "react-redux";
import {Link} from "react-router-dom"


const Gateway = () => {

  const name = useSelector((reduxStore)=>{
    return reduxStore.name;
  }) 
  
  const itemprice = useSelector((reduxStore)=>{
    return reduxStore.itemprice;
  })
  const amt = useSelector((reduxStore)=>{
    return reduxStore.amt;
  })
  return (
    <div className='Cart'>  
      
    <h1>Gateway</h1>
    <hr/>
    <div className="card">

        <div className='img-container'>You have bought Item -1 {name} of Price - Rs {itemprice} successfully</div>
          <div className='card-header'> Item 1 - {name}</div>
          <div className='price'>Your Balance is &#8377;{amt}</div>
         
         <Link to="/" className='link'> <button className='add-to-cart'>GO TO HOME</button> </Link> 

    </div></div>
  )
}

export default Gateway;