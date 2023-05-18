import { HiCheck, HiTrash } from "react-icons/hi2";
import "./TodoItem.css";

function TodoItem() {
  return (
    <div className="todo-item">
      <div className="icon-box--check">
        <HiCheck className="icon icon--check" />
      </div>
      <p className="todo-item-text">Hola mundo</p>
      <HiTrash className="icon icon--delete" />
    </div>
  );
}

export default TodoItem;
