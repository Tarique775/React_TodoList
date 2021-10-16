import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const todoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.floor(Math.random() * 100) },
        ]);
        setInputText('');
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <form>
            <div className="d-flex justify-content-center">
                <input
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input border-0"
                    value={inputText}
                />
                <button onClick={todoHandler} className="todo-button " type="submit">
                    <i className="fas fa-plus-square" />
                </button>
                <div className="select ms-4">
                    <select
                        onClick={statusHandler}
                        name="todos"
                        className="filter-todo btn  btn-success text-start"
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </form>
    );
};

export default Form;
