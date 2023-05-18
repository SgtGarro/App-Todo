import "./App.css";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoSearch from "./components/TodoSearch";

function App() {
  return (
    <div className="app-container">
      <TodoCounter />
      <TodoSearch />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
