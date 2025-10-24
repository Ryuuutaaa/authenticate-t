import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "By grocies", isCompleted: false },
    { id: 2, text: "walk the dog", isCompleted: false },
    { id: 3, text: "laudry", isCompleted: true },
  ]);

  // const totalNumberOfTodos = todos.length;
  return (
    <div className="flex items-center justify-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <div className="relative flex flex-col">
        <main className="w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.0)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
          <Header todos={todos} />

          <TodoList todos={todos} setTodos={setTodos} />

          <Sidebar todos={todos} setTodos={setTodos} />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
