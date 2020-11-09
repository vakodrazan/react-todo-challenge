import React from "react";
import useTodo from "../useTodo";

function CompletedTask({completed}) {
    const [todo, setTodo, 
        todoItem, setTodoItem,
        activeTask,
        handleSubmit,
        completeTodo,
        removeTodo] = useTodo();

    function removeAllCompletedTodo() {
        console.log("Delete All");
        console.log(todo);
        // setTodo(!completed)
    }

    return (
        <div>
            {completed}
            <button onClick={removeAllCompletedTodo}>Delete all</button>
        </div>
    )
}

export default CompletedTask;