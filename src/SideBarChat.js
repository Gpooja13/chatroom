import React from "react";
import "./SideBarChat.css";
import dp2 from "./img/dp2.png";

const SideBarChat = ({ addNewChat }) => {
  return !addNewChat ? (
    <div className="sideBarChat">
      <img
        className="dp"
        src={dp2}
        alt="user"
        style={{ width: "50px", height: "50px" }}
      />
      <div className="sideBarChatInfo">
        <h2>Name</h2>
        <p className="text-message">This is message</p>
      </div>
    </div>
  ) : (
    <div className="sideBarChat">
      <h3>
        Add New Chat
      </h3>
    </div>
  );
};

export default SideBarChat;
