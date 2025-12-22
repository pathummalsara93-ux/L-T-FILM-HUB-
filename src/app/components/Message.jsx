"use client";
import { useState, useEffect } from "react";
import format from "date-fns/format";

const Message = ({ message }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [show, setShow] = useState(false);

  // Fade-in + upward animation
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!message.createdAt) return null;

  return (
    <div
      className={`my-3 p-4 flex flex-col rounded-2xl w-full md:w-3/4 lg:w-2/3 xl:w-3/5 2xl:w-1/2
        bg-gradient-to-br from-[#1e1e2e]/80 to-[#11111b]/80
        backdrop-blur-lg shadow-lg
        transform transition-all duration-500 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="flex items-start gap-3">
        {/* Custom icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83.59 77.906A43.716 43.716 0 1 0 6.25 50a43.43 43.43 0 0 0 10.16 27.906l-.063.052c.219.264.469.49.695.748.28.323.582.625.875.94.875.948 1.773 1.86 2.718 2.718.286.26.583.504.875.756 1 .862 2.027 1.678 3.094 2.441.138.098.26.217.399.315v-.04a43.44 43.44 0 0 0 50 0v.039c.139-.098.26-.217.399-.314a44 44 0 0 0 3.093-2.442c.293-.25.59-.496.875-.755a44 44 0 0 0 2.72-2.719c.29-.314.59-.616.874-.94.225-.258.476-.483.695-.748zM50 25a14.062 14.062 0 1 1 0 28.125A14.062 14.062 0 0 1 50 25M25.022 77.906A15.61 15.61 0 0 1 40.625 62.5h18.75a15.61 15.61 0 0 1 15.603 15.406 37.313 37.313 0 0 1-49.956 0"
            fill="#B4BEFE"
          />
        </svg>

        <div className="flex-1 break-words whitespace-pre-wrap text-[#cdd6f4] dark:text-[#e0def4]">
          {message.text}
        </div>
      </div>

      <div className="flex justify-between mt-2 items-center text-xs text-[#94a1b2]">
        <span>
          {format(
            new Date(message.createdAt.seconds * 1000),
            "MMMM d, hh:mm a"
          )}
        </span>

        <button
          onClick={handleCopy}
          disabled={isCopied}
          className="ml-2 p-1 rounded hover:bg-[#3b4252]/50 transition"
        >
          {isCopied ? (
            <span className="text-green-400">Copied!</span>
          ) : (
            <svg
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2ZM8 6H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Message;
