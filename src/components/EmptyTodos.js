import React from "react";
import "../css/EmptyTodos.css"

function EmptyTodos() {
  return (
    <div className="EmptyTodo-container">
      <p className="EmptyTodo-text">
        !Crea tu primer TODO!
      </p>
    </div>
  );
}

export { EmptyTodos };
