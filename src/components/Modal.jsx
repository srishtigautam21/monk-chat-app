import React from "react";

const Modal = () => {
  return (
    <div className='absolute top-[45px] right-[20px] bg-[white] shadow-lg p-3 flex flex-col gap-4 z-40 rounded-md cursor-pointer '>
      <div className=' hover:bg-slate-300 p-1'>Mark as unread</div>
      <div className=' hover:bg-slate-300 p-1'>Delete</div>
      <div className=' hover:bg-slate-300 p-1'>Cancel</div>
    </div>
  );
};

export default Modal;
