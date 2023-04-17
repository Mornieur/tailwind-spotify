import { HomeIcon, Library, Search } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          pop pop ?
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Apenas F 😢
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          As mais tocadas no seu 2022
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          what is your problem?
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Old music :D
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          minha aleatoriedade :)
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          blueee
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          rap/hip-hop
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          brasileirina
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          rock abluebleble
        </a>
      </nav>
    </aside>
  );
};
