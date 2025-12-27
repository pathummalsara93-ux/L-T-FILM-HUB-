"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += 0.5; // smooth, deterministic
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }
      setProgress(Math.floor(value));
    }, 100); // small interval for smooth increase
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#020617] to-black text-white">

      {/* Floating ambient lights */}
      <div className="absolute w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-3xl animate-floating1"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl animate-floating2"></div>
      <div className="absolute -bottom-32 left-20 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-3xl animate-floating3"></div>

      {/* Main Loader */}
      <div className="relative w-44 h-44 flex items-center justify-center">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400 to-cyan-400 blur-2xl animate-glowRing"></div>

        {/* SVG Progress Ring */}
        <svg className="w-44 h-44 -rotate-90">
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
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Percentage */}
        <span className="absolute text-4xl font-bold text-gradient animate-fade-in">
          {progress}%
        </span>
      </div>

      {/* Animated Loading Text */}
      <p className="mt-10 text-sm uppercase tracking-[0.4em] text-gradient shimmer">
        Loading LT Movie Hub
      </p>

      {/* Subtitle */}
      <span className="mt-2 text-[10px] text-white/40 tracking-widest animate-fade-in-slow">
        Please wait...
      </span>

      {/* Animations */}
      <style jsx>{`
        /* Outer Glow Ring Animation (slow) */
        .animate-glowRing {
          animation: glowRing 6s ease-in-out infinite;
        }
        @keyframes glowRing {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        /* Floating ambient lights (slow cinematic) */
        .animate-floating1 { animation: float1 20s ease-in-out infinite; }
        .animate-floating2 { animation: float2 25s ease-in-out infinite; animation-delay: 2s; }
        .animate-floating3 { animation: float3 30s ease-in-out infinite; animation-delay: 4s; }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, -30px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 25px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -40px); }
        }

        /* Gradient shimmer text */
        .shimmer {
          background: linear-gradient(
            90deg,
            #60a5fa 0%,
            #e0f2fe 50%,
            #f472b6 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        /* Fade In */
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-slow {
          animation: fadeIn 2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Gradient text helper */
        .text-gradient {
          background: linear-gradient(90deg, #38bdf8, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
