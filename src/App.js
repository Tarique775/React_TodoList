import { useEffect, useState } from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filterStatus, setFilterStatus] = useState([]);

    useEffect(() => {
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
    }, [status, todos]);

    const headerName = "Tarique's Todo List";

    return (
        <div className="container-md ">
            <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                    <header>
                        <h1 className="text-center my-5">{headerName}</h1>
                    </header>
                    <Form
                        inputText={inputText}
                        setInputText={setInputText}
                        todos={todos}
                        setTodos={setTodos}
                        status={status}
                        setStatus={setStatus}
                    />
                    <TodoList todos={todos} setTodos={setTodos} filterStatus={filterStatus} />
                </div>
            </div>
        </div>
    );
}

export default App;
