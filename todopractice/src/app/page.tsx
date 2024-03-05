//Main Page
"use client";
import { useState } from "react";
import { TodoObject } from "./models/Todo";
import { v4 as uuid } from "uuid";

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoObject[]>([]);

  const addTodo = () => {
    setTodos([{ id: uuid(), value: todo, done: false }, ...todos]);
    setTodo("");
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main>
      <header>
        <h1 className="flex justify-between items-center flex-col  bg-slate-950 text-3xl">
          To Do List
        </h1>
      </header>
      <div className="flex p-5 items-center flex-col">
        <input
          className="p-2 rounded-md  text-slate-900"
          type="text"
          placeholder="Enter text here"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          className="border-2 p-2 mt-2 rounded-md"
          onClick={() => addTodo()}
        >
          Add Text
        </button>
        <ul className="mt-5">
          {todos.map((todo) => (
            // Ensure each item in the list has a unique key prop
            <li key={todo.id} className="text-2xl mt-5 cursor-pointer">
              {todo.value}
              <button
                className="ml-5  p-2 border-2 rounded-md"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
