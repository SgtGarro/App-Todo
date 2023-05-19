import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { TodoContext } from "../../context/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className="todo-search">
      <input
        className="todo-search-input"
        type="text"
        placeholder="Lavar los platos"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <HiOutlineMagnifyingGlass className="icon icon--search" />
    </div>
  );
}

export default TodoSearch;
