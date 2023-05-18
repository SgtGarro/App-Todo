import "./App.css";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";

function App() {
  return (
    <div className="app-container">
      <TodoCounter />
      <TodoSearch />
    </div>
  );
}

export default App;
