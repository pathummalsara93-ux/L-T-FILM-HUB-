"use client";
import ChatBox, { DeleteMessages } from "./components/ChatBox";
import SourceCodeLink from "./components/SourceCodeLink";
import ThemeSwitch from "./components/ThemeSwitch";
import Snow from "./components/Snow"; // ❄️ add this

export default function Home() {
  return (
    <div
      className="
        relative
        w-full min-h-screen
        bg-[#cdd6f4] text-[#4c4f69]
        dark:bg-[#11111b] dark:text-[#cdd6f4]
        transition-colors duration-700
        pt-2
      "
    >
      <Snow /> {/* ❄️ Snowfall */}

      {/* Header */}
      <div
        className="
          m-3 p-[2px] rounded-2xl
          bg-[length:300%_300%]
          bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-500
          animate-gradient
        "
      >
        <div
          className="
            flex justify-between items-center
            p-4 rounded-2xl
            bg-white/70 dark:bg-white/5
            backdrop-blur-md
            shadow-lg
          "
        >
          <SourceCodeLink />
          <h1 className="text-center font-bold text-4xl text-[#6176dc] dark:text-[#f9e2af] drop-shadow-sm">
            LT-MOVIE-HUB
          </h1>
          <ThemeSwitch />
        </div>
      </div>

      <div className="px-3 mt-2">
        <DeleteMessages />
      </div>

      <div
        className="
          m-3 p-[2px] rounded-2xl
          bg-[length:300%_300%]
          bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
          animate-gradient-slow
        "
      >
        <div
          className="
            rounded-2xl p-4
            bg-white/80 dark:bg-[#11111b]
            backdrop-blur-lg
            shadow-xl
          "
        >
          <ChatBox />
        </div>
      </div>
    </div>
  );
            }
