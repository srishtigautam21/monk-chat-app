import React from "react";
import { MdChevronLeft } from "react-icons/md";
import { useChatContext } from "../context/chatContext";
import SingleContact from "./SingleContact";

import Modal from "./Modal";

const Contacts = () => {
  const { chatData } = useChatContext();
  const { modal, setModal } = useChatContext();

  return (
    <div className='lg:col-start-1 lg:col-end-2 p-4'>
      <div className='flex gap-3 justify-start items-center'>
        <MdChevronLeft />
        <div className='font-[MyFont] font-medium text-[24px]'>Chats</div>
      </div>
      <div className='flex flex-col gap-2 mt-3'>
        {chatData?.map((contact, index) => (
          <SingleContact
            key={contact.userId}
            contact={contact}
            index={index + 1}
          />
          //   modal ? <Modal /> : ""
        ))}
      </div>
    </div>
  );
};

export default Contacts;
