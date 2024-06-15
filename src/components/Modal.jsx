import React from "react";
import { useChatContext } from "../context/chatContext";

const Modal = ({ modalId }) => {
  const { setModal, deleteContact, handleUnreads } = useChatContext();
  return (
    <div className='absolute top-[45px] right-[20px] bg-[white] shadow-lg p-3 flex flex-col gap-2 z-40 rounded-md cursor-pointer '>
      <button
        className=' hover:bg-slate-300 p-1 border-none text-left'
        onClick={() => {
          handleUnreads(modalId);
          setModal(false);
        }}
      >
        Mark as unread
      </button>
      <button
        className=' hover:bg-slate-300 p-1 border-none  text-left'
        onClick={() => {
          deleteContact(modalId);
          setModal(false);
        }}
      >
        Delete
      </button>
      <button
        className=' hover:bg-slate-300 p-1 border-none  text-left'
        onClick={() => setModal(false)}
      >
        Cancel
      </button>
    </div>
  );
};

export default Modal;
