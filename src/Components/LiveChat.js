import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [LiveMessages, setLiveMessages] = useState([]);

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="p-2 bg-slate-100 rounded-lg border border-black w-full h-[575px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form Submit ", LiveMessages);
          dispatch(
            addMessage({
              name: "Anonymous",
              message: LiveMessages,
            })
          );
          setLiveMessages("");
        }}
      >
        <input
          type="text"
          value={LiveMessages}
          onChange={(e) => setLiveMessages(e.target.value)}
          className="px-2 border border-black w-96 rounded-lg"
        />
        <button className="mx-2 px-2 py-1 bg-red-500 rounded-lg text-white">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
