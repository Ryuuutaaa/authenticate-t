import { useTodosContext } from "../lib/hook";

export default function DeleteButton({ id }) {
  const { deleteTodo } = useTodosContext();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        deleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
