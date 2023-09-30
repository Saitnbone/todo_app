import React, { useState } from 'react'
import TodoItem from './item/TodoItem';

const data =[
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
    const [todos, setTodos] =useState(data)

    const changeTodos = (id) =>{
        const copy = [...todos] // Используется для дублирования, чтобы не мутировать состояния
        const current = copy.find(t=>t._id===id) // ищем в дублированном массиве id 
        current.isCompleted = !current.isCompleted // Заменяем значение isCompleted на противоположное
        setTodos(copy)
    }

    const removeTodo = (id) =>{
        const copy = [...todos].filter(t=>t._id !== id)
    }

    return (

    <div className='text-white w-4/5 mx-auto'>
        <h1 className='text-2xl font-bold text-center md-10'>Todo for you</h1>
        {data.map((todo)=><div><TodoItem key={todo.id} todo={todo} 
        changeTodos={changeTodos} removeTodo={removeTodo}/>
        </div>)}
    </div>
  )
};

export default Home;