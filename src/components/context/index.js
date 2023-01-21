import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodo,
    loading,
    error,
  } = useLocalStorage("todosItems", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  let searchTodos = [];

  if (!searchValue.length >= 1) {
    searchTodos = [...todos];
  } else {
    searchTodos = todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchValueText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchValueText);
    });
  }

  const completedTodos = todos.filter((todo) => !!todo.status).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const indexTodo = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[indexTodo].status = true;
    saveTodo(newTodos);
  };

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    saveTodo(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    const newTodo = {
      completed: false,
      text,
    };
    newTodos.push(newTodo);

    saveTodo(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        deleteTodo,
        completeTodo,
        addTodo,
        searchTodos,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
