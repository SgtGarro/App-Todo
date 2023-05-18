import { HiPlus } from "react-icons/hi2";
import "./AddTodo.css";

function AddTodo() {
  return (
    <button type="button" className="add-todo">
      <HiPlus className="icon icon--add" />
    </button>
  );
}

export default AddTodo;
