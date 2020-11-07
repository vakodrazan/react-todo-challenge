import { useState } from "react";
import TodoList from "./components/TodoList";

function useTodo() {
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


    const completed = todo.filter(item => item.isComplete)
                            .map(item => <TodoList 
                                key={item.id} 
                                todo={item} 
                                completeTodo={completeTodo}
                            />)
                        
    const activeTask = todo.filter(item => !item.isComplete)
                            .map(item => <TodoList 
                                key={item.id} 
                                todo={item} 
                                completeTodo={completeTodo}
                            />) 

    return [
        todo, setTodo, 
        todoItem, setTodoItem,
        completed, 
        activeTask,
        handleSubmit,
        completeTodo
    ];
}

export default useTodo;