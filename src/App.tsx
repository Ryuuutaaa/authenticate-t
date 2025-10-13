const App = () => {
  return (
    <div className="flex items-center justify-center font-sans bg-[#f1d4b3] min-h-screen">
      <h1 className="text-[120px] font-bold text-black/5 uppercase absolute left-1/2 -translate-x-1/2 tracking-[0.2rem]">
        TodoApp
      </h1>
      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.0)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]"></header>

        <ul></ul>

        <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-1 border-black/[0.08]"></section>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
