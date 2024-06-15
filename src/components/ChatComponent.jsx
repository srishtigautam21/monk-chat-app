import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useChatContext } from "../context/chatContext";

const ChatComponent = () => {
  const { id } = useParams();
  const { state: contact } = useLocation();
  const navigate = useNavigate();
  const { setChatData, chatData, unreadArr, setUnreadArr, selected } =
    useChatContext();

  useEffect(() => {
    if (contact.unreadCount) {
      setUnreadArr((prev) => [
        ...prev,
        {
          userId: id,
          prevUnreadCount: contact.unreadCount,
        },
      ]);
      setChatData(
        chatData.map((chat) => {
          if (chat.userId === id) {
            chat.unreadCount = 0;
          }
          return chat;
        })
      );
    }
  }, [id]);
  function handleWindowBackBtn() {
    navigate("/");
  }

  useEffect(() => {
    window.addEventListener("popstate", handleWindowBackBtn);
    return () => {
      window.removeEventListener("popstate", handleWindowBackBtn);
    };
  }, []);

  return (
    <div className='lg:col-start-2 lg:col-end-4'>
      <div className='flex flex-col gap-4 pb-3 lg:pt-3'>
        {/* header container */}
        <div className='flex items-center justify-around p-3 pt-2 h-[80px] bg-[#F6F6F6] lg:justify-between'>
          <div className='flex gap-3'>
            <img
              className='w-[52px] h-[52px] rounded-[50%] object-cover'
              src={contact.profilePictureURL}
              alt={contact.name}
            />
            <div>
              <div className='font-[MyFont] font-semibold text-[20px] leading-5'>
                {contact.name}
              </div>
              <div className='text-[grayText]'>Click here for contact info</div>
            </div>
          </div>
          <div className='flex gap-3 lg:w-[157px] lg:gap-9 lg:items-center'>
            <IoVideocamOutline className='w-[18px] h-[18px] text-[blue] lg:w-[30px] lg:h-[30px] lg:text-cyan-500' />
            <BsTelephone className='w-[18px] h-[18px] text-[blue] lg:w-[23px] lg:h-[23px] lg:text-cyan-500' />
            <PiDotsThreeVerticalBold className='w-[18px] h-[18px] text-[blue] lg:w-[30px] lg:h-[30px] lg:text-cyan-500' />
          </div>
        </div>
        {/* chat container */}
        {contact.chat.map((chat, index) => {
          return (
            <div key={index}>
              <div className='flex justify-start'>
                <div className='bg-slate-100 rounded-3xl p-4 w-[70%] m-2'>
                  <div className='text-black'>{chat[`${id}`].message}</div>
                  <div className='text-right text-[grayText]'>
                    {chat[`${id}`].timeStamp}
                  </div>
                </div>
              </div>
              <div className='flex justify-end '>
                <div className='bg-[#DCF7C5] rounded-[40px] p-4 w-[70%] m-2'>
                  <div className='text-black'>{chat.you.message}</div>
                  <div className='text-right text-[grayText]'>
                    {chat.you.timeStamp}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* footer container */}
        <div className='flex gap-2 items-center justify-center h-[48px] lg:justify-stretch'>
          <CiCirclePlus className='w-[34px] h-[34px] text-[grayText] lg:w-[42px] lg:h-[42px]' />
          <div className='w-[32px] h-[32px] border-[1px] border-[grayText] rounded-full flex items-center justify-center'>
            <MdOutlineKeyboardVoice className='w-[20px] h-[20px] text-[grayText] lg:w-[34px] lg:h-[34px]' />
          </div>
          <div className='w-[70%] flex items-center justify-between p-3 border-[2px] border-[#D8D8D8] rounded-[30px] text-[#D8D8D8] lg:w-[90%]'>
            Message {contact.name}
            <div>
              <IoMdSend className='w-[20px] h-[20px] text-[grayText] lg:w-[25px] lg:h-[25px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
