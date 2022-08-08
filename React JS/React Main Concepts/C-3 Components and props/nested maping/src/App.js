// import List from "./components/UniqueList/List.js"
import React from "react";
const user = [
  {
    name: "Muzammel Hoque Mamun",
    age : 25, 
    phone : [
      {
        home: "Mozumder House",
      
      },
      {
        homenumber:"01201"
      }
    ]
  }
]
export default function App(){
  return (
    <div>
      <h1>Nested Lists</h1>
      {
        user.map((user,index) => (
        <article key = {index}>
          <h3> {user.name} </h3>
          <h3> {user.age} </h3>
          {
            user.phone.map((phone,index) => <div>
              <p> HOme:{phone.home} </p>
              <p> homenumber:{phone.homenumber} </p>

            </div>)
          }
        </article>)
    )}
    </div>
  );
}