import Navbar from "./components/navbar";

export default function Page() {
  return (
    <>
      <div className="flex items-center flex-col mt-8 mb-8 text-slate-400">
        <h1>
          Bem vindo ao back, olhe uma coleção de jogos zerados e reviews certas
        </h1>
      </div>
      <div className="flex  flex-col mt-4">
        <h1 className="text-2xl font-bold">Reviews nuevas</h1>
        <div className="flex flex-row">
          <div className="mt-2 me-2">
            <div className="bg-slate-400 w-40 h-40"></div>
            <h1>card aq</h1>
          </div>
          <div className="mt-2 me-2">
            <div className="bg-slate-400 w-40 h-40"></div>
            <h1>card aq</h1>
          </div>
        </div>
      </div>
    </>
  );
}
