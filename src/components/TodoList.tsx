import ButtonDelete from "./ButtonDelete";

const initialTodos = ["By grocies", "walk the dog", "laudry"];

const TodoList = () => {
  return (
    <ul>
      {initialTodos.map((todo) => (
        <li
          key={todo}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
        >
          <span>{todo}</span> <ButtonDelete />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
