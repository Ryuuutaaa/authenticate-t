import { useState } from "react";
import ButtonDelete from "./ButtonDelete";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "By grocies", isCompleted: false },
    { text: "walk the dog", isCompleted: false },
    { text: "laudry", isCompleted: true },
  ]);
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.text}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>{" "}
          <ButtonDelete />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
