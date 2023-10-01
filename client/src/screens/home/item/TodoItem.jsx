import React from 'react'
import Check from './Check';
import {BsTrash} from 'react-icons/bs'


function TodoItem({todo, changeTodos, removeTodo}) {
  return (
    <div className='flex items-center justify-between m-5 rounded-2xl
       bg-gray-800 p-5 w-full' 
    >
      <button className='flex items-center'
      onClick={()=>changeTodos(todo.id)}
    >
        <Check isCompleted={todo.isCompleted} />
        <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
      </button>
      <button onClick={()=>removeTodo(todo.id)}>
        <BsTrash size={21} className='text-white hover:text-red-600 
          transition-colors ease-in-out duration-300'/>
      </button>
    </div>
  )
};

export default TodoItem;