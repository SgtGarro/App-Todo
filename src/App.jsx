import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  return (
    <div className="app-container">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <AddTodo />
    </div>
  );
}

export default App;
