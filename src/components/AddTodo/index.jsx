import React from "react";
import { HiPlus } from "react-icons/hi2";
import { TodoContext } from "../../context/TodoContext";
import "./AddTodo.css";

function AddTodo() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <button
      type="button"
      className="add-todo"
      onClick={() => {
        setOpenModal(!openModal);
      }}
    >
      <HiPlus className="icon icon--add" />
    </button>
  );
}

export default AddTodo;
