import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Active from "./components/Active";
import CompletedTask from "./components/CompletedTask";
import Header from "./components/Header";
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
            <article>
                <Header />
                <Input 
                    handleSubmit={handleSubmit} 
                    setTodoItem={setTodoItem} 
                    todoItem={todoItem}
                />
                <div>
                    <Switch>
                        <Route path="/active">
                            <Active todo={todo} completeTodo={completeTodo} />
                        </Route>
                        <Route path="/completed">
                            <CompletedTask todo={todo} completeTodo={completeTodo} />
                        </Route>
                        <Route path="/">
                            {todo.map(item => <TodoList 
                                key={item.id} 
                                todo={item} 
                                completeTodo={completeTodo}
                            />)}
                        </Route>
                    </Switch>
                </div>
            </article>
        </main>
    )
}

export default App;