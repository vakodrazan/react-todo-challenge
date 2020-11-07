import React from "react";


function TodoList({todo}) {
    return (
        <div>
            <input type="checkbox" />
            <label>{todo}</label>
        </div>
    )
}

export default TodoList;