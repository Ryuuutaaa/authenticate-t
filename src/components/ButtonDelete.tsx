const ButtonDelete = ({ setTodos, id }) => {
  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }}
    >
      ❌
    </button>
  );
};

export default ButtonDelete;
