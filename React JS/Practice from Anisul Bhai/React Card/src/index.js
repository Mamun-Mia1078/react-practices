import React from 'react';
import ReactDOM from 'react-dom';
const todoTitle = "Work For Jannah";
const paragraph = "Salah is very important for goto jannah . it key of jannah . firstly feresta questions will salah";
 const contact = "Phone : 01867137378"
// style 
//   const headinStyle = {
//     backgroudColor: "purple",
//     color:"white",
//     textAlign: "center",
//     padding:"15px"
//   }

ReactDOM.render(
 <div>
    <h1 className='headingStyle'> My Card</h1>
     <div className='card'>
        <h3 className='cardTitle'> {todoTitle} </h3>
        <p className='paragraph'> {paragraph} </p>
        <p className='contact'> {contact} </p>
        
     </div>
 </div>,
 document.getElementById('root')
);


