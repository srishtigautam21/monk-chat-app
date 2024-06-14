import { useContext, createContext, useState } from "react";
import { data } from "../Data/data";
const ChatContext = createContext({});

const ChatProvider = ({ children }) => {
  const [chatData, setChatData] = useState(data);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState("");
  return (
    <ChatContext.Provider
      value={{ chatData, modal, setModal, modalId, setModalId }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const useChatContext = () => useContext(ChatContext);

export { ChatProvider, useChatContext };
