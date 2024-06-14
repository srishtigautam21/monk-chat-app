import React, { useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useChatContext } from "../context/chatContext";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const SingleContact = ({ contact, index }) => {
  const { modal, setModal, setModalId, modalId } = useChatContext();
  //   const [modalId, setModalId] = useState("");

  const handleModal = (e) => {
    e.stopPropagation();
    setModal((open) => !open);
    setModalId(contact.userId);
  };
  return (
    <div className='flex p-3 items-center justify-between gap-2 h-[64px] relative hover:bg-slate-200'>
      <Link to={`/chats/${contact.userId}`} state={contact}>
        <div className='flex gap-1 items-center'>
          <img
            className='w-[52px] h-[52px] rounded-[50%] object-cover'
            src={contact.profilePictureURL}
            alt={contact.name}
          />
          {/* Add the small green circle */}
          <div>
            <div className='font-[MyFont] font-semibold text-[20px] leading-5'>
              {contact.name}
            </div>
            <div className='text-[grayText]'>I think top two are:</div>
          </div>
        </div>
      </Link>
      <div className='flex gap-1 items-center justify-between'>
        <div className='flex flex-col items-center justify-center gap-1'>
          <div className='text-[grayText] text-[12px]'>11/19/19</div>
          {!!contact.unreadCount && (
            <div className=' bg-[green] w-[22px] h-[22px] rounded-full text-[white] flex items-center justify-center text-[12px]'>
              {contact.unreadCount}
            </div>
          )}
        </div>
        <button
          className=' ml-4'
          onClick={(e) => {
            handleModal(e);
          }}
        >
          <PiDotsThreeVerticalBold className='w-[20px] h-[20px] text-[blue]' />
        </button>
      </div>

      {modal && modalId === `user${index}` ? <Modal /> : ""}
    </div>
  );
};

export default SingleContact;
