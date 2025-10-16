import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

const Sidebar = () => {
  return (
    <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]">
      <AddTodoForm />

      <Button />
    </section>
  );
};

export default Sidebar;
