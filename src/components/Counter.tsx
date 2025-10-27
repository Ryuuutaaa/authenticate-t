import { useTodosContext } from "../lib/hook";

export default function Counter() {
  const { totalCount, completedCount } = useTodosContext();

  return (
    <p>
      <b>{completedCount}</b> / {totalCount} todos completed
    </p>
  );
}
