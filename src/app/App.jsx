import React from "react";
import AddTodo from "../components/AddTodo";
import EmptyTodo from "../components/EmptyTodo";
import ErrorTodo from "../components/ErrorTodo";
import FormTodo from "../components/FormTodo";
import LoadingItem from "../components/LoadingItem";
import Modal from "../components/Modal";
import TodoCounter from "../components/TodoCounter";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import { TodoContext } from "../context/TodoContext";
import "./App.css";

function App() {
  const {
    searchedTodos,
    deleteTodo,
    toggleTodo,
    loading,
    error,
    totalTodos,
    openModal,
  } = React.useContext(TodoContext);
  return (
    <div className="app-container">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <ErrorTodo />}
        {loading &&
          !error &&
          [...Array(8)].map((_, i) => <LoadingItem key={i} />)}
        {!loading && searchedTodos.length <= 0 && (
          <EmptyTodo isSearched={Boolean(totalTodos)} />
        )}
        {!loading &&
          searchedTodos.map((todo) => (
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

      {openModal && (
        <Modal>
          <FormTodo />
        </Modal>
      )}
    </div>
  );
}

export default App;
