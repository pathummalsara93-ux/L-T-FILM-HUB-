"use client";
import ChatBox, { DeleteMessages } from "./components/ChatBox";
import SourceCodeLink from "./components/SourceCodeLink";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <div
      className="
        relative min-h-screen w-full overflow-hidden
        bg-gradient-to-br from-[#cdd6f4] via-[#e0e7ff] to-[#fdfcff]
        dark:from-[#0f0f1a] dark:via-[#11111b] dark:to-[#1a1b26]
        transition-colors duration-700
      "
    >
      {/* Soft floating glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[120px] animate-pulse" />

      {/* Header */}
      <div className="relative z-10 m-3 p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-500 animate-gradient">
        <div className="flex justify-between items-center p-4 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl">
          <SourceCodeLink />
          <h1 className="text-center font-extrabold text-4xl tracking-wide text-[#6176dc] dark:text-[#f9e2af] drop-shadow-md">
            LT-MOVIE-HUB
          </h1>
          <ThemeSwitch />
        </div>
      </div>

      {/* Tools */}
      <div className="px-3 mt-2 relative z-10">
        <DeleteMessages />
      </div>

      {/* Chat Area */}
      <div className="relative z-10 m-3 p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient-slow">
        <div className="rounded-2xl p-4 bg-white/80 dark:bg-[#0f0f1a]/80 backdrop-blur-xl shadow-2xl">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
