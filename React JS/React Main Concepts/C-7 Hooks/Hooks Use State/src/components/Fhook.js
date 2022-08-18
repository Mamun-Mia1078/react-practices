import React,{useState} from "react"

export default function Fhook() {
   const [count, setCount] = useState(0)
   const handlebutton = () => {
    setCount(count+1)
   }
    

  return (
    <div>
        <h1> Count : {count} </h1>
        <button onClick={handlebutton}> Increment From Functional Hooks </button>
    </div>
  )
}
