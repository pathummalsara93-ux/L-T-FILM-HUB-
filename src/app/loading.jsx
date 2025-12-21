"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 8; // natural feel
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }
      setProgress(Math.floor(value));
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-gradient-to-br from-[#0f172a] via-[#020617] to-black
        text-white
      "
    >
      {/* Glow Ring */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl"></div>

        <svg className="w-32 h-32 -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="54"
            stroke="#020617"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r="54"
            stroke="#3b82f6"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={339}
            strokeDashoffset={339 - (339 * progress) / 100}
            className="transition-all duration-300 ease-out"
          />
        </svg>

        {/* Percentage */}
        <span className="absolute text-2xl font-bold tracking-wider text-blue-400">
          {progress}%
        </span>
      </div>

      {/* Text */}
      <p className="mt-6 text-sm uppercase tracking-[0.3em] text-blue-300/80">
        Loading LT Movie Hub
      </p>
    </div>
  );
}
