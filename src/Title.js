import React from 'react'
import {useState,useEffect} from "react"
import {useSelector,useDispatch } from "react-redux"

const Title = () => {

    const amt = useSelector((reduxStore)=>{
        return reduxStore.amt;
        });

    
  return (
    <div className='Title'>

        <div className='heading'>Cafe Studio Bakery</div>
        <div className='balance'>Balance &#8377;{amt}</div>
    </div>
  )
}

export default Title;