import React from "react";

const TodoForm = (props) => {
    const { inputText, setInputText, todoList, setTodoList, setTaskStatus } =
        props;
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        setTodoList([
            ...todoList,
            {
                task: inputText,
                completed: false,
                id: Math.ceil(Math.random() * 1000),
            },
        ]);
        setInputText("");
    };

    const handleTaskStatus = (e) => {
        setTaskStatus(e.target.value);
    };
    return (
        <form>
            <input
                value={inputText}
                onChange={handleInputChange}
                type="text"
                className="todo-input"
            />
            <button
                onClick={handleSubmitTodo}
                className="todo-button"
                type="submit"
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select
                    onChange={handleTaskStatus}
                    name="todos"
                    className="filter-todo"
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default TodoForm;
