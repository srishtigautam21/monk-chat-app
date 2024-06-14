import { useState } from "react";

import "./App.css";
import Contacts from "./components/Contacts";
import ChatComponent from "./components/ChatComponent";
import { Route, Routes } from "react-router-dom";

function App() {
  // <Route path='/video/:id' element={<SingleVideoPage />} />
  return (
    <div className='lg:grid lg:grid-cols-3 lg:gap-3'>
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/chats/:id' element={<ChatComponent />} />
      </Routes>
    </div>
  );
}

export default App;
