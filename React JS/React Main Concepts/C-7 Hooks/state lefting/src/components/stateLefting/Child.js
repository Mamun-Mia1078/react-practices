import React from 'react'

const Child = (props) => {
    const data = "I am from child (app)"
    props.onData(data)
  return (
    <div>
        
        <p> {props.data} </p>
    </div>
    
  )
}
export default Child;
