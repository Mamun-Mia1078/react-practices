import React from 'react';
import ReactDOM from 'react-dom';
// const element = React.createElement('h1',null, 'Hello , world!');
// console.log(element);
const index = 0; 
setInterval (() => {
  const element = (
    <h1 className='heading'tabIndex= {index}>
      <span className='text'>Hello It's {new Date().toLocaleTimeString()} </span>
      
    </h1>

  );
  
  

  
  ReactDOM.render(element,document.getElementById('root'));
},1000)
 //element is the smallest of React ; 
// jsx is React elements creator
