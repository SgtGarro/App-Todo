import PropTypes from "prop-types";
import "./EmptyTodo.css";

function EmptyTodo({ isSearched }) {
  return (
    <p className="empty-todo">
      {isSearched
        ? "No existe ningun todo con ese resultado"
        : "Crea tu primer todo"}
    </p>
  );
}

EmptyTodo.propTypes = {
  isSearched: PropTypes.bool.isRequired,
};

export default EmptyTodo;
