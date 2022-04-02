import Form from './Components/Form';
import TodoList from './Components/TodoList';
import { TodoProvider } from './Context/TodoContext';

function App() {
    const headerName = "Tarique's Todo List";

    return (
        <TodoProvider>
            <div className="container-md ">
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6">
                        <header>
                            <h1 className="text-center my-5">{headerName}</h1>
                        </header>
                        <Form />
                        <TodoList />
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
