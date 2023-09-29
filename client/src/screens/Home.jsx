import React from 'react'
import TodoItem from './TodoItem';

const todos =[
    {
        id: 1,
        title: "Finish the essay collaboration", 
        isComplited: false
    },
    {
        id: 2,
        title: "Read next chapter of the book", 
        isComplited: false
    },
    {
        id: 3,
        title: "Send the finished assigment", 
        isComplited: false
    },
]

const Home = () => {
  return (
    <div className='bg-gray-900 h-screen text-white'>
        <p>Home</p>
        {todos.map((todo)=><div><TodoItem key={todo.id} todo={todo}/></div>)}
    </div>
  )
};

export default Home;