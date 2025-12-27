"use client";
import ChatBox, { DeleteMessages } from "./components/ChatBox";
import SourceCodeLink from "./components/SourceCodeLink";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#11111b] text-[#cdd6f4] overflow-hidden transition-colors duration-700">

      {/* 🔥 Frame-bound floating glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Circular Frame */}
        <div className="absolute w-[500px] h-[500px] border-4 border-purple-400 rounded-full" />

        {/* Floating Glow 1 */}
        <div className="absolute w-64 h-64 bg-pink-400/40 rounded-full blur-3xl animate-float-fire"></div>
        {/* Floating Glow 2 */}
        <div className="absolute w-48 h-48 bg-cyan-400/30 rounded-full blur-2xl animate-float-fire2"></div>

        {/* Flickering overlay */}
        <div className="absolute inset-0 bg-white/5 animate-flicker rounded-full pointer-events-none" />

        <style jsx>{`
          @keyframes float-fire {
            0% { transform: translate(0, 0); }
            25% { transform: translate(50px, -20px); }
            50% { transform: translate(-30px, 30px); }
            75% { transform: translate(20px, -10px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes float-fire2 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-40px, 30px); }
            50% { transform: translate(20px, -25px); }
            75% { transform: translate(-10px, 10px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          .animate-float-fire {
            animation: float-fire 8s ease-in-out infinite;
          }
          .animate-float-fire2 {
            animation: float-fire2 10s ease-in-out infinite;
          }
          .animate-flicker {
            animation: flicker 1.5s linear infinite;
          }
        `}</style>
      </div>

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
