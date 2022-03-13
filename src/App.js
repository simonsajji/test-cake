import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Routes, Route} from "react-router-dom";
import Gateway from './Gateway';
import Cart from './Cart';
import Home from './Home';
import Title from  "./Title"


function App() {
  return (
    <>
      <Title />

      <Routes>

        <Route path="/cart" element={<Cart/>} />
        <Route path="/gateway" element={<Gateway/>} />
        <Route path="/" element={<Home/>} />


      </Routes>
    </>
  );
}

export default App;
