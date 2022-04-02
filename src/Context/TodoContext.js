import { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

export function TodoProvider(props) {
    const { children } = props;

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filterStatus, setFilterStatus] = useState([]);

    useEffect(() => {
        getLocalTodos();
        console.log('re-render');
    }, []);

    useEffect(() => {
        filteringTodo();
        saveLocalTodos();
        console.log('tiktok');
    }, [status, todos]);

    const filteringTodo = () => {
        switch (status) {
            case 'completed': {
                setFilterStatus(todos.filter((todo) => todo.completed === true));
                break;
            }
            case 'uncompleted': {
                setFilterStatus(todos.filter((todo) => todo.completed === false));
                break;
            }
            default: {
                setFilterStatus(todos);
            }
        }
    };

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            const localTodos = JSON.parse(localStorage.getItem('todos'));
            setTodos(localTodos);
        }
    };

    return (
        <TodoContext.Provider
            value={{
                inputText,
                setInputText,
                todos,
                setTodos,
                status,
                setStatus,
                filterStatus,
                setFilterStatus,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}
