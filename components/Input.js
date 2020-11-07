import React from "react";


function Input({handleSubmit, setTodoItem, todoItem}) {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="todo" 
                // value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
            />
            <button>Add</button>
        </form>

    )
}

export default Input;