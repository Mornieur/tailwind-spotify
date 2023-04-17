import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import {
  Home as HomeIcon,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-rrcp.jpg"
                width={104}
                height={104}
                alt="Capa do álbum"
              />
              <strong>Stadium Arcadium</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/30.jpg"
                width={104}
                height={104}
                alt="Capa do álbum"
              />
              <strong>30</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/cheap-queen.jpg"
                width={104}
                height={104}
                alt="Capa do álbum"
              />
              <strong>Cheap Queen (Deluxe)</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/dawn.fm.jpg"
                width={104}
                height={104}
                alt="Capa do álbum"
              />
              <strong>Dawn FM (Alternative World)</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/fine-line.jpg"
                width={104}
                height={104}
                alt="Capa do álbum"
              />
              <strong>Fine Line </strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/igor.jpg"
                width={104}
                height={104}
                alt="Capa do álbum"
              />
              <strong>Igor</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Maria Fernanda Feitoza
          </h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 roundeda-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album-rrcp.jpg"
                width={120}
                height={120}
                alt="Capa do álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 roundeda-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album-rrcp.jpg"
                width={120}
                height={120}
                alt="Capa do álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 roundeda-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album-rrcp.jpg"
                width={120}
                height={120}
                alt="Capa do álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 roundeda-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album-rrcp.jpg"
                width={120}
                height={120}
                alt="Capa do álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 roundeda-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album-rrcp.jpg"
                width={120}
                height={120}
                alt="Capa do álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
