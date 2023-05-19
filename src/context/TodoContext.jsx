import PropTypes from "prop-types";
import React from "react";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const defaultTodos = [
    {
      task: "Limpiar la casa",
      completed: true,
    },
    {
      task: "Picar la carne",
      completed: false,
    },
    {
      task: "Tomar una ducha",
      completed: false,
    },
    {
      task: "Ir al gimnasio",
      completed: true,
    },
  ];

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const searchedTodos = todos.filter((todo) => {
    const todoTask = todo.task.toLowerCase();
    return todoTask.includes(searchValue.toLowerCase());
  });

  console.log(searchedTodos);

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  const toggleTodo = function (task) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.task === task);

    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        toggleTodo,
        searchValue,
        setSearchValue,
        searchedTodos,
        completedTodos,
        totalTodos,
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
