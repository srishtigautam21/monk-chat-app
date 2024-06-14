import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const ChatComponent = () => {
  const { id } = useParams();
  const { state: contact } = useLocation();
  console.log(contact);
  console.log(id);
  return (
    <div className='lg:col-start-2 lg:col-end-4'>
      <div className='flex flex-col gap-4 pb-3'>
        {/* header container */}
        <div className='flex items-center justify-around p-3 pt-2 h-[80px] bg-[#F6F6F6]'>
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
          <div className='flex gap-3'>
            <IoVideocamOutline className='w-[18px] h-[18px] text-[blue]' />
            <BsTelephone className='w-[18px] h-[18px] text-[blue]' />
            <PiDotsThreeVerticalBold className='w-[18px] h-[18px] text-[blue]' />
          </div>
        </div>
        {/* chat container */}
        {/* <div> */}
        {contact.chat.map((chat, index) => {
          return (
            <div key={index}>
              <div className='flex justify-end '>
                <div className='bg-[#DCF7C5] rounded-[40px] p-4 w-[70%] m-2'>
                  <div className='text-black'>{chat.you.message}</div>
                  <div className='text-right text-[grayText]'>
                    {chat.you.timeStamp}
                  </div>
                </div>
              </div>
              <div className='flex justify-start'>
                <div className='bg-slate-100 rounded-3xl p-4 w-[70%] m-2'>
                  <div className='text-black'>{chat[`${id}`].message}</div>
                  <div className='text-right text-[grayText]'>
                    {chat[`${id}`].timeStamp}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* footer container */}
        <div className='flex gap-2 items-center justify-center h-[48px]'>
          <CiCirclePlus className='w-[34px] h-[34px] text-[grayText]' />
          <div className='w-[32px] h-[32px] border-[1px] border-[grayText] rounded-full flex items-center justify-center'>
            <MdOutlineKeyboardVoice className='w-[20px] h-[20px] text-[grayText]' />
          </div>
          <div className='w-[70%] flex items-center justify-between p-3 border-[2px] border-[#D8D8D8] rounded-[30px] text-[#D8D8D8]'>
            Message {contact.name}
            <div>
              <IoMdSend className='w-[20px] h-[20px] text-[grayText]' />
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default ChatComponent;
