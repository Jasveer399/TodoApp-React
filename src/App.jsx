import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./Contexts/Todo";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/TodoItems/Todoitme";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((preval) => [{ id: Date.now(), ...todo }, ...preval]);
  };

  const updateTodo = (id, todo) => {
    setTodos((preval) =>
      preval.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((preval) => preval.filter((todo) => todo.id !== id));
  };
  /////////////////////////////////////////////////////////
  const togleTodo = (id) => {
    setTodos((preval) =>
      preval.map((todo) =>
        todo.id === id
          ? { ...todo, complete: !todo.complete}
          : todo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, togleTodo, deleteTodo }}>
      <div className="bg-slate-800 min-h-96 py-8 rounded-3xl">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold">Manage Your Todo</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

//

export default App;
