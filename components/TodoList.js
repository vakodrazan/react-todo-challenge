import React from "react";


function TodoList({todo, isComplete, setComplete}) {
    return (
        <div>
            <input 
                id={todo.id} 
                type="checkbox" 
                checked={isComplete} 
                onChange={() => setComplete(!isComplete)}
            />
            <label htmlFor={todo.id}>{todo.title}</label>
        </div>
    )
}

export default TodoList;