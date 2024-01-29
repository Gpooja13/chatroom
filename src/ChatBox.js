import React from "react";
import "./ChatBox.css";
import dp2 from "./img/dp2.png";

const ChatBox = () => {
  return (
    <div className="chatBox">
      <div className="chatHeader">
        <img className="dp" src={dp2} alt="user" />
        <div className="chatHeaderInfo">
          <h3>Room Name </h3>
          <p>Last seen</p>
        </div>
        <div className="chatHeaderRight"></div>
        <button className="g-btn">
          <span class="material-symbols-outlined">search</span>
        </button>
        <button className="g-btn">
          <span class="material-symbols-outlined">attach_file</span>
        </button>
        <button className="g-btn">
          <span class="material-symbols-outlined">more_vert</span>
        </button>
      </div>
      <div className="chatBody">
        <p className="chatMessage">
          <span className="chatname">User</span>Hello man
          <span className="timespamp">6 min ago</span>
        </p>
        <p className="chatMessage">
          <span className="chatname">User</span>Hello man
          <span className="timespamp">6 min ago</span>
        </p>
        <p className="chatMessage">
          <span className="chatname">User</span>Hello man
          <span className="timespamp">6 min ago</span>
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
