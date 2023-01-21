import React, { useContext } from "react";
import "../css/CreateTodoButton.css";
import { TodoContext } from "./context";

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);
  const onClickSetTodo = () => {
    setOpenModal((prevState)=>!prevState);

  };

  return (
    <button className="CreateTodoButton" onClick={onClickSetTodo}>
      +
    </button>
  );
}

export { CreateTodoButton };
