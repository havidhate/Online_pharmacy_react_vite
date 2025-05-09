import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../services/firebase"; // Adjust path if needed

const LiveChatWidget = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!text.trim()) return;
    await addDoc(collection(db, "chats"), {
      message: text,
      createdAt: serverTimestamp(),
    });
    setText("");
  };

  useEffect(() => {
    const q = query(collection(db, "chats"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="border p-4 h-80 flex flex-col">
      <div className="flex-1 overflow-auto mb-2">
        {messages.map((msg) => (
          <div key={msg.id} className="p-1">
            {msg.message}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 bg-blue-600 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChatWidget;
