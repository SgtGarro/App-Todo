import React from "react";
import AddTodo from "../components/AddTodo";
import TodoCounter from "../components/TodoCounter";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import { TodoContext } from "../context/TodoContext";
import "./App.css";

function App() {
  const { searchedTodos, deleteTodo, toggleTodo } =
    React.useContext(TodoContext);
  return (
    <div className="app-container">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.task}
            task={todo.task}
            completed={todo.completed}
            onDelete={() => deleteTodo(todo.task)}
            onToggle={() => toggleTodo(todo.task)}
          ></TodoItem>
        ))}
      </TodoList>

      <AddTodo />
    </div>
  );
}

export default App;
