import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row h-10 mt-2 w-full">
        <div className="flex flex-row w-full">
          <div className="w-2/4">
            <Link id="title" href='/' className="text-2xl font-bold">
              Back
            </Link>
          </div>
          <div className="flex flex-row items-center justify-end w-2/4 h-full">
            <div className="me-5">
              <Link href="/reviews" className="underline">
                Reviews
              </Link>
            </div>
            <div className="me-5 h-4/5">
              <input
                type="text"
                name="PesquisarJogo"
                id="search"
                className="bg-slate-700 text-white rounded text-base ps-1 h-full w-40"
                placeholder="Pesquisar"
              ></input>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
