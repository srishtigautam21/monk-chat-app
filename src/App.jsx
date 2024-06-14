import { useState } from "react";

import "./App.css";
import Contacts from "./components/Contacts";
import ChatComponent from "./components/ChatComponent";

function App() {
  return (
    <div className='lg:grid lg:grid-cols-3 lg:gap-3'>
      <Contacts />
      <ChatComponent />
    </div>
  );
}

export default App;
