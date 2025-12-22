"use client";
import React, { useState } from "react";
import format from "date-fns/format";

const Message = ({ message }) => {
  const [copied, setCopied] = useState(false);

  if (!message?.createdAt) return null;

  const copy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="my-3 w-full md:w-3/4 xl:w-3/5 animate-reveal">
      <div className="relative overflow-hidden rounded-2xl bg-[#0e0e1a] text-[#eaeaf0] shadow-lg">
        
        {/* animated glow layer */}
        <span className="absolute inset-0 glow-mask" />

        {/* content */}
        <div className="relative p-4">
          <p className="text-sm leading-relaxed tracking-wide reveal-text">
            {message.text}
          </p>

          <div className="mt-3 flex justify-between items-center text-[11px] opacity-60">
            <span>
              {format(
                new Date(message.createdAt.seconds * 1000),
                "MMM d · HH:mm"
              )}
            </span>

            <button
              onClick={copy}
              className="hover:opacity-80 transition"
            >
              {copied ? "✓ saved" : "save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
