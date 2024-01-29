import React from "react";
import "./SideBar.css";
import dp from "./img/dp.png";
import SideBarChat from "./SideBarChat";

const SideBar = () => {
  return (
    <div className="slideBar">
      <div className="sideBarHeader">
        <div>
          <img className="dp" src={dp} alt="" />
        </div>
        <div className="sideBarHeaderRight">
          <button className="g-btn">
            <span class="material-symbols-outlined">motion_photos_on</span>
          </button>
          <button className="g-btn">
            <span class="material-symbols-outlined">more_vert</span>
          </button>
          <button className="g-btn">
            <span class="material-symbols-outlined">chat</span>
          </button>
        </div>
      </div>
      <div className="sideBarSearch">
        <div className="sideBarSearchContainer">
          <span class="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search Contact"></input>
        </div>
      </div>
      <div className="sideBarChats">
        <SideBarChat addNewChat/>
        <SideBarChat/>
        <SideBarChat/>
        <SideBarChat/>
      </div>
    </div>
  );
};

export default SideBar;
