import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [taskStatus, setTaskStatus] = useState("all");
    const [filteredTodoList, setFilteredTodoList] = useState([]);

    useEffect(() => {
        switch (taskStatus) {
            case "completed":
                setFilteredTodoList(
                    todoList.filter((todo) => todo.completed === true)
                );
                break;
            case "uncompleted":
                setFilteredTodoList(
                    todoList.filter((todo) => todo.completed === false)
                );
                break;

            default:
                setFilteredTodoList(todoList);
        }
    }, [todoList, taskStatus]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>ToDo App</h1>
            </header>
            <TodoForm
                inputText={inputText}
                todoList={todoList}
                setInputText={setInputText}
                setTodoList={setTodoList}
                setTaskStatus={setTaskStatus}
            />
            <TodoList
                todoList={todoList}
                filteredTodoList={filteredTodoList}
                setFilteredTodoList={setFilteredTodoList}
                setTodoList={setTodoList}
            />
        </div>
    );
}

export default App;
