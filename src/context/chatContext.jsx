import { useContext, createContext, useState } from "react";
import { data } from "../Data/data";
const ChatContext = createContext({});

const ChatProvider = ({ children }) => {
  const [chatData, setChatData] = useState(data);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState("");
  const [unreadArr, setUnreadArr] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState(chatData[0].userId);

  const deleteContact = (modalId) => {
    setChatData(chatData.filter((item) => modalId !== item.userId));
  };

  const handleUnreads = (modalId) => {
    unreadArr.map((item) => {
      if (item.userId === modalId) {
        setChatData(
          chatData.map((chat) => {
            if (chat.userId === modalId) {
              chat.unreadCount = item.prevUnreadCount;
            }
            return chat;
          })
        );
      }
    });
  };

  return (
    <ChatContext.Provider
      value={{
        chatData,
        setChatData,
        modal,
        setModal,
        modalId,
        setModalId,
        deleteContact,
        handleUnreads,
        unreadArr,
        setUnreadArr,
        isMobile,
        setIsMobile,
        selected,
        setSelected,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const useChatContext = () => useContext(ChatContext);

export { ChatProvider, useChatContext };
