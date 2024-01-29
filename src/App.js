import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import ChatBox from "./ChatBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="appBody">
          <SideBar />
          <Routes>
            <Route path="/" element={<ChatBox />}></Route>
            <Route path="/group/:groupID" element={<ChatBox />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
