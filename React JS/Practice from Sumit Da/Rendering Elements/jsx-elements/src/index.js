import React from 'react';
import ReactDOM from 'react-dom';
const index = 0; 
  setInterval(() => {
    const element = (
    <h1 className='heading' tabIndex={index}>
      <span className='text' >Assalamualaikum it's {new Date().toLocaleTimeString()} </span>
      
    </h1>
    );
         ReactDOM.render(element,document.getElementById('root'));
  },1000);
    
   

