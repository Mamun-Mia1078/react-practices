import React,{useEffect, useState} from 'react';

import useFetch from './useFectch'

const DataFetch = () => {
   const [data,isLoading, error]= useFetch("https://jsonplaceholder.typicode.com/todos");
    
    const loadingMessage = <p> Todo is Loading</p>
     const errorMessage = <p> {error} </p>;

    const todosElement = data && data.map((todo) => {
        return <p key={todo.id} >
            {todo.title}
        </p>
        
    });
    

  return (
    <div>
        <h1>FAKE ToDos</h1>
         {error && errorMessage }
         {isLoading && loadingMessage}
         {todosElement}
            
        console.log(todo.title);
    </div>
  );
};

export default DataFetch