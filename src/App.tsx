import BackgroundHeading from "./BackgroundHeading";

const App = () => {
  return (
    <div className="flex items-center justify-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <div className="relative flex flex-col">
        <main className="w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.0)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
          <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]"></header>

          <section className="col-[1/2] row-[2/3] p-8">
            <ul></ul>
          </section>

          <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]"></section>
        </main>

        <footer className="flex justify-between items-center text-[11px] opacity-30 mt-[12px]">
          <small>&copy; 2025, Partner Coding</small>
          <p>
            version <b>2.1</b>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
