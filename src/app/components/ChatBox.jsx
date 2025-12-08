import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { db, messages_db} from "../../firebase-config";
import AdminMessage from "./AdminMessage";
import Message from "./Message";
import SendMessage from "./SendMessage";
import Preloader from "./Preloader";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, messages_db), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const copyLastMessage = () => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage) {
      navigator.clipboard.writeText(lastMessage.text);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "c" || e.key === "C")) {
        e.preventDefault();
        copyLastMessage();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
  }, [messages]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="p-5 mb-16 text-[#3b3424] dark:text-[#cad3f5] flex flex-col items-center">
          <AdminMessage>
           ඔයාලට ගන්න ඕන Film එකේ නම හරියටම ටයිප් කරලා එවන්න.
            මොකද නම වැරදුනොත් film එක ලැබෙන්නේ නෑ
           පසුව එය ගෘප් එකට අවම පැය 48 ක් තුළ upload වෙනවා🎥
            
            Admin :- Pathum Malsara
          </AdminMessage>
          {messages?.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      )}
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
      {/* <button onClick={copyLastMessage}>CopyLastMessage</button> */}
    </>
  );
};

export const DeleteMessages = async () => {
  const fortyEightHoursAgo = new Date();
  fortyEightHoursAgo.setHours(fortyEightHoursAgo.getHours() - 48);

  const delmsg = query(collection(db, messages_db), orderBy("createdAt", "asc"));

  const snapshot = await getDocs(delmsg);
  const batch = writeBatch(db);

  snapshot.forEach((doc) => {
    const createdAt = doc.data().createdAt.toDate();
    if (createdAt < fortyEightHoursAgo) {
      batch.delete(doc.ref);
    }
  });

  await batch.commit();
};

export default ChatBox;
