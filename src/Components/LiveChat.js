import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Polling for new messages...");
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="p-2 bg-slate-100 rounded-lg border border-black w-full h-[575px]">
      <ChatMessage name="User" message="Hello there!" />
      <ChatMessage name="User" message="Hello there!" />
      <ChatMessage name="User" message="Hello there!" />
      <ChatMessage name="User" message="Hello there!" />
      <ChatMessage name="User" message="Hello there!" />
      <ChatMessage name="User" message="Hello there!" />
    </div>
  );
};

export default LiveChat;
