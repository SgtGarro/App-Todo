import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./FormTodo.css";
function FormTodo() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [task, setTask] = React.useState("");

  return (
    <form
      className="form-todo"
      onSubmit={(event) => {
        event.preventDefault();
        addTodo(task);
        setOpenModal(false);
      }}
    >
      <div className="form-field">
        <label className="form-field-label" htmlFor="task">
          Ingrese la tarea a realizar
        </label>
        <textarea
          className="form-field-input"
          name="task"
          id="task"
          value={task}
          placeholder="Limpiar el cuarto"
          onChange={(event) => {
            setTask(event.target.value);
          }}
        ></textarea>
      </div>
      <div className="form-btns">
        <button
          type="button"
          className="btn btn--cancel"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Cancelar
        </button>
        <button type="submit" className="btn btn--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export default FormTodo;
