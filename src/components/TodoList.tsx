import ButtonDelete from "./ButtonDelete";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.length === 0 ? (
        <li className="h-full flex justify-center items-center font-semibold">
          Started by adding a todo
        </li>
      ) : null}

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
