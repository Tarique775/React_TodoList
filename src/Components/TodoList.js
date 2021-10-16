import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterStatus }) => (
    <div className="todo-container ">
        <ul className="todo-list list-group my-5">
            {filterStatus.map((todo) => (
                <Todo
                    todo={todo}
                    text={todo.text}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </ul>
    </div>
);
export default TodoList;
