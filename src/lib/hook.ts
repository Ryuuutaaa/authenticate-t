import { useContext } from "react";
import { TodosContext } from "../context/TodosContextProvicer";

export function useTodosContext() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error(
      "TodosContext must be used within a TodosContextProvider component"
    );
  }

  return context;
}
