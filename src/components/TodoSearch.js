import React from "react";
import "../css/TodoSearch.css";
import { TodoContext } from "./context";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const OnChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Search TODO"
      value={searchValue}
      onChange={OnChangeSearchValue}
    />
  );
}

export { TodoSearch };
