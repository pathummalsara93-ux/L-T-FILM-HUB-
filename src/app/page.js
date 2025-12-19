"use client"
import ChatBox, { DeleteMessages } from "./components/ChatBox";
import SourceCodeLink from "./components/SourceCodeLink";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <div
      className="
        w-full min-h-screen
        bg-[#cdd6f4] text-[#4c4f69]
        dark:bg-[#11111b] dark:text-[#cdd6f4]
        transition-colors duration-700
      "
    >
      {/* Header */}
      <div
        className="
          flex justify-between items-center
          m-3 p-4 rounded-2xl
          bg-white/60 dark:bg-white/5
          backdrop-blur-md
          shadow-lg
          border border-white/30 dark:border-white/10
        "
      >
        <SourceCodeLink />

        <h1
          className="
            text-center font-bold text-4xl
            text-[#6176dc] dark:text-[#f9e2af]
            drop-shadow-sm
          "
        >
          LT-MOVIE-HUB
        </h1>

        <ThemeSwitch />
      </div>

      {/* Controls */}
      <div className="px-3 mt-2">
        <DeleteMessages />
      </div>

      {/* Chat Area */}
      <div
        className="
          m-3 p-4 rounded-2xl
          bg-white/70 dark:bg-white/5
          backdrop-blur-lg
          shadow-xl
          border border-white/30 dark:border-white/10
        "
      >
        <ChatBox />
      </div>
    </div>
  );
              }
