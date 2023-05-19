import PropTypes from "prop-types";
import React from "react";
import useLocaleStorage from "../hooks/useLocaleStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: setTodos,
    deleteItem: deleteStorage,
    loading,
    error,
  } = useLocaleStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const searchedTodos = todos.filter((todo) => {
    const todoTask = todo.task.toLowerCase();
    return todoTask.includes(searchValue.toLowerCase());
  });

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  // Todo actions
  const toggleTodo = function (task) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.task === task);

    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  const deleteTodo = function (task) {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.task === task);

    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        toggleTodo,
        deleteTodo,
        searchValue,
        setSearchValue,
        searchedTodos,
        totalTodos,
        completedTodos,
        loading,
        error,
        deleteStorage,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.element,
};

export { TodoContext, TodoProvider };
