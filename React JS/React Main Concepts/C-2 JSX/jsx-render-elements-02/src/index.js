import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

const title = "Islam is best Religion in The world";
const des = "this is my luck allah gives me thats why i am in this religion "
const headstyle = {
  background:"green", 
  color: "purple", 
  textAlign:"center",
  padding:"10px"
}
ReactDOM.render(
  <div>
    
      <h1 style={{color:"red",fontSize:"4rem"}} >Bismillahir Rahmanir Rahim </h1>
      <h2 style={headstyle} > {title} </h2>      
      <h3 style={headstyle}> {des} </h3>
      <h4 className='cssClass'> Allah Forgive us  </h4>
      <h5 className='importClass' >Every times say Astagferullah </h5>

  </div>,
  document.getElementById('root')
);

// src floder ea thakle import kora lage 
// public floder ea thakle import kora lage na 
