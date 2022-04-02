import React from 'react';

function Todo({ text, todos, todo, setTodos }) {
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    return (
        <div>
            <div className="d-md-flex mx-5 mb-2">
                <li
                    style={{ width: '325px' }}
                    className={`todo-lists  list-group-item ms-3 rounded-pill ${
                        todo.completed ? 'completed' : ''
                    }`}
                >
                    {text}
                </li>

                <button
                    onClick={completeHandler}
                    type="button"
                    className="complete-btn rounded-circle btn btn-success ms-2 "
                >
                    <i
                        className={`${todo.completed === true ? 'fas fa-minus' : 'fas fa-check '}`}
                    />
                </button>
                <button
                    onClick={deleteHandler}
                    type="button"
                    className="delete-btn rounded-circle btn btn-danger ms-2 "
                >
                    <i className="fas fa-trash " />
                </button>
            </div>
        </div>
    );
}
export default Todo;
