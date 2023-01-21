import React from 'react';
import '../css/TodoItem.css';

function TodoItem({status, text, completeTodo,deleteTodo}) {

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${status  ? 'Icon-check--active' : ""}`} onClick={completeTodo}>
        √
      </span>
      <p className={`TodoItem-p ${status && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={deleteTodo}>
        X
      </span>
    </li>
  );
}

export { TodoItem };