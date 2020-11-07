import React from "react";


function TodoList({todo}) {
    return (
        <div className={todo.isComplete ? "complete" : ""}>
            <input 
                id={todo.id} 
                type="checkbox" 
                // checked={todo.isComplete}
            />
            <label htmlFor={todo.id}>{todo.title}</label>
        </div>
    )
}

export default TodoList;