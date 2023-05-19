import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <p className="counter">
      Has completado {completedTodos} de {totalTodos} tareas
    </p>
  );
}

export default TodoCounter;
