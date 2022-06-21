import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos = [
  {
    id: uuidv4(),
    title: "todo1",
    desc: "todo1 Description "
  }  ,
  {
    id: uuidv4(),

    title: "todo2",
    desc: "todo2 Description "
  }  ,
  {
    id: uuidv4(),

    title: "todo3",
    desc: "todo3 Description "
  }  ,
];

const List = () => {
  return (
  <div>
    {todos.map((todo) => {
        const {id,title, desc} = todo
        return (
        <div key = {id}>
            <h3>
                {title}
                <p>
                    {desc}
                </p>
            </h3>
        </div>
        );
    })}
  </div>
  );
}
export default List;