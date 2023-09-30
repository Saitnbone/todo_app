import React from 'react'
import Check from './Check';


function TodoItem({todo}) {
  return (
      <div>
        <Check/>
      {todo.title}
      </div>
  )
};

export default TodoItem;