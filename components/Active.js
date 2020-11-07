import React from "react";
import TodoList from "./TodoList";



function Active({todo, completeTodo}) {
    return (
        <div>
            {todo.filter(item => !item.isComplete)
                .map(item => <TodoList 
                    key={item.id} 
                    todo={item} 
                    completeTodo={completeTodo}
                />)
            }
        </div>
    )
}

export default Active;