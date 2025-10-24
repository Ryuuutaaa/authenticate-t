const Counter = ({ todos }) => {
  return (
    <p>
      <b>{todos.filter((todo) => todo.isCompleted).length}</b> / {todos.length} todos complated
    </p>
  );
};

export default Counter;
