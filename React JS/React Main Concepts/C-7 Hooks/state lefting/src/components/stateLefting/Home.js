import New from './New'
import React from 'react'
import Todos from './Todos'

const Home = () => {
    const todos = ["todo1","todo2"];
  return (
    <div>
        <Todos todos = {todos} />
        <New/>
    </div>
  )
}
export default Home; 