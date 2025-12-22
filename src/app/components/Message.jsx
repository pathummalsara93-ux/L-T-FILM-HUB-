"use client";
import React, { useState } from "react";
import format from "date-fns/format";

const Message = ({ message }) => {
  const [copied, setCopied] = useState(false);

  if (!message?.createdAt) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="my-2 w-full md:w-3/4 lg:w-2/3">
      <div
        className="
          relative
          rounded-xl
          bg-[#e6e9ef] dark:bg-[#1e1e2e]
          px-4 py-2.5
          text-sm
          shadow-sm
        "
      >
        {/* Message text */}
        <p className="whitespace-pre-wrap break-words text-[#4c4f69] dark:text-[#cdd6f4]">
          {message.text}
        </p>

        {/* Footer */}
        <div className="mt-1 flex items-center justify-end gap-2 text-[11px] text-gray-500">
          <span>
            {format(
              new Date(message.createdAt.seconds * 1000),
              "hh:mm a"
            )}
          </span>

          <button
            onClick={handleCopy}
            className="hover:opacity-70 transition"
            title="Copy"
          >
            {copied ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-500"
              >
                <path d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.646 6.82-10.002a1 1 0 0 1 1.39-.263Z" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-400"
              >
                <path d="M8 7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V7Zm-2 3H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7v-2H5v-7h1v-2Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
