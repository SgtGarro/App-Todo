import PropTypes from "prop-types";
import { HiCheck, HiTrash } from "react-icons/hi2";
import "./TodoItem.css";

function TodoItem({ task, completed, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <HiCheck
        className={`icon icon--check ${completed ? "active" : ""}`}
        onClick={onToggle}
      />
      <p
        className={`todo-item-text ${
          completed ? "todo-item-text--completed" : ""
        }`}
      >
        {task}
      </p>
      <HiTrash className="icon icon--delete" onClick={onDelete} />
    </div>
  );
}

export default TodoItem;

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
