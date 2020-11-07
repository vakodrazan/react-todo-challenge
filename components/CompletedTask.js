import React from "react";
import TodoList from "./TodoList";



function CompletedTask({todo, completeTodo}) {
    return (
        <div>
            {todo.filter(item => item.isComplete)
                .map(item => <TodoList 
                    key={item.id} 
                    todo={item} 
                    completeTodo={completeTodo}
                />)
            }
            <button>Delete all</button>
        </div>
    )
}

export default CompletedTask;