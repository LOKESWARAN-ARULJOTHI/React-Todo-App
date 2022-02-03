import React from "react";
import Todos from "./Todos";

const TodoList = (props) => {
    const { todoList, filteredTodoList, setFilteredTodoList, setTodoList } =
        props;
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodoList.map((todo) => (
                    <Todos
                        key={todo.id}
                        todo={todo}
                        filteredTodoList={filteredTodoList}
                        setTodoList={setTodoList}
                        todoList={todoList}
                        setFilteredTodoList={setFilteredTodoList}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
