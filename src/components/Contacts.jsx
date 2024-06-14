import React from "react";
import { MdChevronLeft } from "react-icons/md";
import { useChatContext } from "../context/chatContext";
import SingleContact from "./SingleContact";

const Contacts = () => {
  const { chatData } = useChatContext();
  return (
    <div className='lg:col-start-1 lg:col-end-2 p-4'>
      <div className='flex gap-3 justify-start items-center'>
        <MdChevronLeft />
        <div className=' font-[MyFont] font-medium text-[24px]'>Chats</div>
      </div>
      <div className='flex flex-col gap-2'>
        {chatData?.map((contact) => (
          <SingleContact contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
