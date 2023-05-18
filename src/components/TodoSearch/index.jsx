import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import "./TodoSearch.css";

function TodoSearch() {
  return (
    <div className="todo-search">
      <input
        className="todo-search-input"
        type="text"
        placeholder="Lavar los platos"
      />
      <HiOutlineMagnifyingGlass className="icon icon--search" />
    </div>
  );
}

export default TodoSearch;
