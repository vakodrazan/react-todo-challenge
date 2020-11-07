import React from "react";


function TodoList({todo, completeTodo}) {
    const checkTodo = e => completeTodo(todo.id, e.target.checked);
    return (
        <div className={todo.isComplete ? "complete" : ""}>
            <input 
                id={todo.id} 
                type="checkbox" 
                checked={todo.isComplete}
                onChange={checkTodo}
            />
            <label htmlFor={todo.id}>{todo.title}</label>
        </div>
    )
}

export default TodoList;