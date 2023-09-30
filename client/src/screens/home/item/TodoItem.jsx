import React from 'react'
import Check from './Check';


function TodoItem({todo, changeTodos}) {
  return (
      <button className='flex items-center m-5 rounded-2xl
       bg-gray-800 p-5 w-full' 
       onClick={()=>changeTodos(todo._id)}>
        
      <Check isCompleted={todo.isCompleted} />
      <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
      </button>
  )
};

export default TodoItem;