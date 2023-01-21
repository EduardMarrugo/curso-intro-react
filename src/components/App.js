import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "./context/index.js";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
