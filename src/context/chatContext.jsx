import { useContext, createContext, useState } from "react";
import { data } from "../Data/data";
const ChatContext = createContext({});

const ChatProvider = ({ children }) => {
  const [chatData, setChatData] = useState(data);
  return (
    <ChatContext.Provider value={{ chatData }}>{children}</ChatContext.Provider>
  );
};

const useChatContext = () => useContext(ChatContext);

export { ChatProvider, useChatContext };
