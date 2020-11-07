import React, { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
    const [todo, setTodo] = useState([]);
    const [todoItem, setTodoItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (todoItem === "") return; // To prevent from submit an empty value
        setTodo(prevTodo => [
            ...prevTodo, 
            {
                id: Date.now(),
                title: todoItem,
                isComplete: false
            }
        ]);
        setTodoItem("")
    }
    function completeTodo(id, complete) {
        setTodo(todo.map(item => item.id === id ? {...item, isComplete: complete} : item))
    }


    return (
        <main>
            <header>
                <h1>Todo</h1>
            </header>
            <Input 
                handleSubmit={handleSubmit} 
                setTodoItem={setTodoItem} 
                todoItem={todoItem}
            />
            {todo.map(item => <TodoList 
                key={item.id} 
                todo={item} 
                completeTodo={completeTodo}
            />)}
        </main>
    )
}

export default App;