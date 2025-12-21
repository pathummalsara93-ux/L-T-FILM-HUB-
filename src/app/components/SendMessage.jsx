import React, { useState, useEffect, useRef } from "react";
import { db, messages_db } from "../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { debounce } from "lodash";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    const handleKDown = (e) => {
      if (e.shiftKey && e.key === "Escape") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };
    document.addEventListener("keydown", handleKDown);
  }, []);

  const debouncedSendMessage = debounce(async (message) => {
    if (message.trim() === "") return;

    await addDoc(collection(db, messages_db), {
      text: message,
      name: "User",
      createdAt: serverTimestamp(),
    });

    setMessage("");
    setTimeout(() => {
      scroll.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 200);
  }, 500);

  const sendMessage = (event) => {
    event.preventDefault();
    debouncedSendMessage(message);
  };

  const handleKeyDown = (event) => {
    if (window.innerWidth > 768) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage(event);
      }
    }
  };

  return (
    <form
      onSubmit={sendMessage}
      autoComplete="off"
      className="
        fixed bottom-0 w-full
        px-4 py-4
        flex items-center gap-3
        bg-white/70 dark:bg-[#11111b]/80
        backdrop-blur-xl
        border-t border-white/30 dark:border-white/10
        shadow-[0_-10px_30px_rgba(0,0,0,0.15)]
      "
    >
      {/* Input */}
      <textarea
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message…"
        className="
          grow h-11 px-4 py-2
          rounded-2xl
          resize-none
          bg-white/80 dark:bg-[#1e1e2e]
          text-[#1e1e2e] dark:text-[#cdd6f4]
          placeholder:text-[#6c7086] dark:placeholder:text-[#7f849c]
          focus:outline-none
          focus:ring-2 focus:ring-[#89b4fa] dark:focus:ring-[#a6e3a1]
          transition-all duration-300
          shadow-inner
        "
      />

      {/* Send Button */}
      <button
        type="submit"
        className="
          h-11 w-11
          rounded-2xl
          flex items-center justify-center
          text-white text-xl
          bg-gradient-to-br from-indigo-500 via-sky-400 to-cyan-400
          shadow-lg
          transition-all duration-150
          hover:scale-105
          active:scale-95
          active:shadow-inner
        "
      >
        ➤
      </button>
    </form>
  );
};

export default SendMessage;
