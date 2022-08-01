import React from 'react';
import ReactDOM from 'react-dom';
const todoTitle = "Work For Jannah";
const paragraph = "Salah is very important for goto jannah . it key of jannah . firstly feresta questions will salah";
 
// style 
//   const headinStyle = {
//     backgroudColor: "purple",
//     color:"white",
//     textAlign: "center",
//     padding:"15px"
//   }

ReactDOM.render(
 <div>
  <h1 style={{color:"red"}} >Bismillahir Rahmanir Rahim</h1>
  <p> {paragraph} </p>
  {/* <h3 style={headinStyle} >Insha-Allah we will read quran regularly</h3> */}
  <h4> {todoTitle} </h4>
  <h6 className="{headingStyle}" > Islam is my religion thanks to allah for giving this oppurtunity to go jannah </h6>
 </div>,
 document.getElementById('root')
);


