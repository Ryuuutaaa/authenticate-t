const Counter = ({ todos }) => {
  return (
    <p>
      <b>0</b> / {todos.length} todos complated
    </p>
  );
};

export default Counter;
