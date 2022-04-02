import React, { useContext } from 'react';
import { TodoContext } from '../Context/TodoContext';
import Todo from './Todo';

function TodoList() {
    const { todos, setTodos, filterStatus } = useContext(TodoContext);
    return (
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
}
export default TodoList;
