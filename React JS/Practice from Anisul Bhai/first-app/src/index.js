import React from 'react';
import ReactDOM from 'react-dom';
const todoTitle = "Work For Jannah";
const paragraph = "Salah is very important for goto jannah . it key of jannah . firstly feresta questions will salah";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root
// others way 
ReactDOM.render(
 <div>
  <h1>Bismillahir Rahmanir Rahim</h1>
  <p> {paragraph} </p>
  <h3>Insha-Allah we will read quran regularly</h3>
  <h4> {todoTitle} </h4>
 </div>,
 document.getElementById('root')
);


