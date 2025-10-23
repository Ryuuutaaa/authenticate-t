import { useState } from "react";
import ButtonDelete from "./ButtonDelete";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "By grocies", isCompleted: false },
    { id: 2, text: "walk the dog", isCompleted: false },
    { id: 3, text: "laudry", isCompleted: true },
  ]);
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.text}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, isCompleted: !t.isCompleted };
                }
                return t;
              })
            );
          }}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>

          <ButtonDelete id={todo.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
