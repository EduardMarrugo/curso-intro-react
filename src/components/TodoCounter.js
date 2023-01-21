import React from "react";
import "../css/TodoCounter.css";
import { TodoContext } from "./context";

function TodoCounter() {
  const { completedTodos: completed, totalTodos: total } =
    React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Haz completado {completed} de {total} TODOs
    </h2>
  );
}

export { TodoCounter };
