"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 6 + 1; // smoother + premium
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }
      setProgress(Math.floor(value));
    }, 110);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        overflow-hidden
        bg-gradient-to-br from-[#020617] via-[#020617] to-black
        text-white
      "
    >
      {/* Animated background glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      {/* Loader */}
      <div className="relative w-36 h-36 flex items-center justify-center">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl animate-glow"></div>

        {/* SVG Progress Ring */}
        <svg className="w-36 h-36 -rotate-90">
          <circle
            cx="72"
            cy="72"
            r="60"
            stroke="#020617"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="72"
            cy="72"
            r="60"
            stroke="url(#grad)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={377}
            strokeDashoffset={377 - (377 * progress) / 100}
            className="transition-all duration-300 ease-out"
          />
          <defs>
            <linearGradient id="grad" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Percentage */}
        <span className="absolute text-3xl font-bold text-blue-400 animate-fade-in">
          {progress}%
        </span>
      </div>

      {/* Animated Text */}
      <p className="mt-8 text-xs uppercase tracking-[0.4em] text-blue-300 shimmer">
        Loading LT Movie Hub
      </p>

      {/* Subtitle */}
      <span className="mt-2 text-[10px] text-white/40 tracking-widest animate-fade-in-slow">
        please wait
      </span>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }

        @keyframes glow {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }

        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }

        @keyframes pulseSlow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            #60a5fa 0%,
            #e0f2fe 50%,
            #60a5fa 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2.5s linear infinite;
        }

        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-slow {
          animation: fadeIn 2s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
