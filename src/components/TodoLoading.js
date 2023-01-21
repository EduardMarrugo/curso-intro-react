import React from "react";
import "../css/TodoLoading.css";

function TodoLoading() {
  return (
    <React.Fragment>
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando TODOs...</p>
        <span className=" LoadingTodo-deleteIcon"></span>
      </div>
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando TODOs...</p>
        <span className=" LoadingTodo-deleteIcon"></span>
      </div>
    </React.Fragment>
  );
}

export { TodoLoading };
