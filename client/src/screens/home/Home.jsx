import React, { useState } from 'react'
import TodoItem from './item/TodoItem';
import CreateTodoField from './createTodoField/CreateTodoField';

const data =[
    {
        id: '1',
        title: "Finish the essay collaboration", 
        isCompleted: false
    },
    {
        id: '2', 
        title: "Read next chapter of the book", 
        isCompleted: false
    },
    {
        id: '3',
        title: "Send the finished assigment", 
        isCompleted: false
    },
]

const Home = () => {
    const [todos, setTodos] =useState(data)

    const changeTodos = (id) =>{
        const copy = [...todos] // Используется для дублирования, чтобы не мутировать состояния
        const current = copy.find(t=>t.id === id) // ищем в дублированном массиве id 
        current.isCompleted = !current.isCompleted // Заменяем значение isCompleted на противоположное
        setTodos(copy)
        console.log(todos)
    }

    const removeTodo = (id) =>{
        setTodos([...todos].filter(t=>t.id !== id))
        console.log(todos)
    }

    return (

    <div className='text-white w-4/5 mx-auto'>
        <h1 className='text-2xl font-bold text-center md-10'>Todo for you</h1>
        {todos.map((todo)=><div><TodoItem 
        key={todo.id} 
        todo={todo} 
        changeTodos={changeTodos} 
        removeTodo={removeTodo}
        />
        </div>)}
        <CreateTodoField setTodos={setTodos}/>
    </div>
  )
};

export default Home;