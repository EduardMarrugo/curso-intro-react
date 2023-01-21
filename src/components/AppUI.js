import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoContext } from "./context/index";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import { TodoLoading } from "./TodoLoading";
import { EmptyTodos } from "./EmptyTodos"

function AppUI() {
  const {
    loading,
    error,
    deleteTodo,
    completeTodo,
    searchTodos,
    openModal,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {!!loading && <TodoLoading />}
        {!!error && <p>Error</p>}
        {!loading && !totalTodos && <EmptyTodos />}
        {searchTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            status={todo.status}
            key={todo.text}
            deleteTodo={() => deleteTodo(todo.text)}
            completeTodo={() => completeTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
