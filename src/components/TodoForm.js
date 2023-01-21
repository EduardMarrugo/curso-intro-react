import React from "react";
import "../css/TodoForm.css";
import { TodoContext } from "./context";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodo, setNewTodo] = React.useState("");

  const onChangeTextArea = (e) => {
    setNewTodo(e.target.value);
  };

  const onCancel = (e) => {
    setOpenModal((prevState) => !prevState);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() !== "") addTodo(newTodo);
    setNewTodo("");
    document.getElementById("todoForm").reset();
  };
  return (
    <form onSubmit={onSubmit} id="todoForm">
      <label>Escribe un nuevo todo</label>
      <textarea onChange={onChangeTextArea} placeholder="TODO" />
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button" onClick={onCancel}>
          cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
