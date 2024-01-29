import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import ChatBox from "./ChatBox";

function App() {
  return (
    <div className="app">
      <div className="appBody">
        <SideBar />
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
