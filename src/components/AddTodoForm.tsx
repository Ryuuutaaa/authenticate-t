import { useState } from "react";
import Button from "./Button";

const AddTodoForm = ({ todos, setTodos }) => {
  const [todoText, setTodoText] = useState([]);
  const addTodo = (todoText) => {
    if (todos.length >= 3) {
      alert("Log in to add more th an 3 moore");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (todos.length >= 3) {
            alert("Log in to add more 3 than");
            return;
          } else {
            setTodos((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                text: todoText,
                isCompleted: false,
              },
            ]);
          }
        }}
      >
        <h2 className="font-medium text-[#231d15]">Add a todo</h2>
        <input
          type="text"
          className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
        <Button buttonType="secondary">Add to list</Button>
      </form>
    </>
  );
};

export default AddTodoForm;
