import PropTypes from "prop-types";
import { HiCheck, HiTrash } from "react-icons/hi2";
import "./TodoItem.css";

function TodoItem({ task, completed }) {
  return (
    <div className="todo-item">
      <div className="icon-box--check">
        <HiCheck className="icon icon--check" />
      </div>
      <p className="todo-item-text">{task}</p>
      <HiTrash className="icon icon--delete" />
    </div>
  );
}

export default TodoItem;

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};
