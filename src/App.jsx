import { useEffect } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import ChatComponent from "./components/ChatComponent";
import { Route, Routes } from "react-router-dom";
import { useChatContext } from "./context/chatContext";

function App() {
  const { setIsMobile } = useChatContext();

  function checkIsMobile() {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [window.innerWidth]);

  return (
    <div>
      {window.innerWidth < 768 ? (
        <Routes>
          <Route path='/' element={<Contacts />} />
          <Route path='/chats/:id' element={<ChatComponent />} />
        </Routes>
      ) : (
        <div className='lg:grid lg:grid-cols-3 lg:gap-3'>
          <Contacts />
          <Routes>
            <Route path='/' element={<Contacts />} />
            <Route path='/chats/:id' element={<ChatComponent />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
