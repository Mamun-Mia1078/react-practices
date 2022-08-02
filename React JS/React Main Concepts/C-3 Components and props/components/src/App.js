import Card from './components/card.js'
import Data from './components/data.json'
import React from "react"

function App(){
let items = [];
// for (let i =0;i<Data.length;i++){
//   items.push(<Card title ={Data[x].title})
// }

  
  return <div>
    <h1 className='head'> Muzammel Hoque Mamun </h1>
    {Data.map((item) => <Card contact = {item.title}/>)}
  </div>
}
export default App;
// components 