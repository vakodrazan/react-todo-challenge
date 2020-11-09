import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Active from "./components/Active";
import CompletedTask from "./components/CompletedTask";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import useTodo from "./useTodo";

function App() {

    const [todo, setTodo, 
        todoItem, setTodoItem,
        completed, 
        activeTask,
        handleSubmit,
        completeTodo,
        removeTodo] = useTodo();

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
                            <Active activeTask={activeTask} />
                        </Route>
                        <Route path="/completed">
                            <CompletedTask completed={completed} />
                        </Route>
                        <Route path="/">
                            {todo.map(item => <TodoList 
                                key={item.id} 
                                todo={item} 
                                completeTodo={completeTodo}
                                removeTodo={removeTodo}
                            />)}
                        </Route>
                    </Switch>
                </div>
            </article>
        </main>
    )
}

export default App;