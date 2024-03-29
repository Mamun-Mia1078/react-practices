import React,{useEffect, useState} from 'react';

const loadingMessage = <p> Todo is Loading</p>
const DataFetch = () => {
    const [todos, setTodos] = useState(null) ;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); 
    
    useEffect (() => {

        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
                     if(!res.ok){
                        throw Error("Fetching Data not Coming...");
                     }else {
                        return res.json();
                     }
            
            
        })
        .then((data) => {
            setTodos(data);
            setIsLoading(false);
            setError(null); 
        })
        
        .catch((error) => {
            setError(error.message)
            setIsLoading(false);
        });
        
    },[]);

    const todosElement = todos && todos.map((todo) => {
        return <p key={todo.id} >
            {todo.title}
        </p>
    });
    

  return (
    <div>
        <h1>FAKE ToDos</h1>
         {error && <p> {error} </p>}
         {isLoading && loadingMessage}
         {todosElement}
            
        
    </div>
  );
};

export default DataFetch