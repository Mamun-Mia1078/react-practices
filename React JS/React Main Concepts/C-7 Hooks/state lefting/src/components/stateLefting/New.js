import React, {useState} from 'react'

const New = () => {
    const [todo, setTodo] = useState("")
    const handleInputChange = (event) => {
        setTodo(event.target.value);
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(todo);
    }
  return (
    
   <form onSubmit={handleSubmit}>
    <label htmlFor='todo'> New todo:</label>
    <input type="text" id = "todo"name= "todo" value = {todo} onChange= {handleInputChange} />
    <button> Add Todo </button>
   </form>
  )
}
export default New; 