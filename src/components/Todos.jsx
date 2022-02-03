import React from "react";

const Todos = ({
    todo,
    todoList,
    filteredTodoList,
    setFilteredTodoList,
    setTodoList,
}) => {
    const handleDeleteTask = () => {
        setTodoList(filteredTodoList.filter((item) => item.id !== todo.id));
    };

    const handleCompletedTask = () => {
        setTodoList(
            todoList.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {todo.task}
            </li>
            <button onClick={handleCompletedTask} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={handleDeleteTask} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todos;
