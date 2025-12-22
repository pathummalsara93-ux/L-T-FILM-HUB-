"use client";
import React, { useEffect, useState } from "react";
import format from "date-fns/format";

const Message = ({ message }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!message?.createdAt) return null;

  return (
    <div
      className={`
        relative my-3 flex w-full md:w-3/4 lg:w-2/3 xl:w-3/5 2xl:w-1/2
        transition-all duration-500
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
      `}
    >
      {/* Bubble */}
      <div
        className="
          group relative w-full
          rounded-2xl rounded-tl-sm
          bg-[#e6e9ef] dark:bg-[#1e1e2e]
          px-4 py-3
          shadow-sm dark:shadow-none
        "
      >
        {/* Bubble tail */}
        <span className="
          absolute -left-1 top-3
          w-3 h-3
          bg-[#e6e9ef] dark:bg-[#1e1e2e]
          rotate-45
        " />

        {/* Header */}
        <div className="flex items-start gap-2">
          {/* Avatar */}
          <div className="shrink-0 mt-1">
            <svg
              width="30"
              height="30"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M83.59 77.906A43.716 43.716 0 1 0 6.25 50a43.43 43.43 0 0 0 10.16 27.906c6.5 7.6 15.8 13.1 26.1 15.4a43.44 43.44 0 0 0 15 0c10.3-2.3 19.6-7.8 26.1-15.4zM50 25a14 14 0 1 1 0 28a14 14 0 0 1 0-28"
                fill="#25D366"
              />
            </svg>
          </div>

          {/* Message text */}
          <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">
            {message.text}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-2 flex items-center justify-end gap-2 text-[11px] text-gray-500 dark:text-gray-400">
          <span>
            {format(
              new Date(message.createdAt.seconds * 1000),
              "hh:mm a"
            )}
          </span>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            disabled={isCopied}
            className="
              opacity-0 group-hover:opacity-100
              transition-all duration-200
              hover:scale-110
            "
          >
            {isCopied ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#25D366]"
              >
                <path d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.646 6.82-10.002a1 1 0 0 1 1.39-.263Z" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-400 hover:text-[#25D366]"
              >
                <path d="M12 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2ZM8.535 4A3.998 3.998 0 0 1 12 2c1.48 0 2.773.804 3.465 2H17a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1.535Z" />
              </svg>
            )}
          </button>
        </div>

        {/* Copied toast */}
        {isCopied && (
          <div className="
            absolute -top-7 right-3
            rounded-full px-2 py-0.5
            text-[10px]
            bg-[#25D366] text-black
            animate-fade-in
          ">
            Copied
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
