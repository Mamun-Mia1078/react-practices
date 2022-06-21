import Card from './card'
import React from "react";
import data from "./data.json";

function App(){
return <div>
    <h1 className='headingStyle'>My Card</h1>
 {data.map((item,index) => <card key={index} titletext ={item.title} descText = {item.desc}}
 </div>

}
export default App;
