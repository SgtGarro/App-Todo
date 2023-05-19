import PropTypes from "prop-types";
import "./TodoList.css";

function TodoList({ children }) {
  return <div className="todo-list">{children}</div>;
}

export default TodoList;

TodoList.propTypes = {
  children: PropTypes.array,
};
