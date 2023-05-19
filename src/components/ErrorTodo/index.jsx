import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./ErrorTodo.css";

function ErrorTodo() {
  const { deleteStorage } = React.useContext(TodoContext);
  return (
    <div className="error-todo">
      <p className="error-todo-text">
        Hubo un error con la pagina. ¿Desea reiniciar el sistema?
      </p>
      <button type="button" className="error-todo-btn" onClick={deleteStorage}>
        Reiniciar
      </button>
      <p className="error-todo-warning">
        ¡Esto provocara la perdida de todos los datos!
      </p>
    </div>
  );
}

export default ErrorTodo;
