import React, { useState, useEffect } from "react";
import "./SideBar.css";
import dp from "./img/dp.png";
import SideBarChat from "./SideBarChat";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

const SideBar = () => {
  const [group, setGroup] = useState([]);

  const getGroups = async () => {
    onSnapshot(collection(db, "groups"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setGroup(list);
    });
  };

  useEffect(() => {
    getGroups();
  }, []);
  return (
      <div className="slideBar">
        <div className="sideBarHeader">
          <div>
            <img className="dp" src={dp} alt="" />
          </div>
          <div className="sideBarHeaderRight">
            <button className="g-btn">
              <span className="material-symbols-outlined">
                motion_photos_on
              </span>
            </button>
            <button className="g-btn">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
            <button className="g-btn">
              <span className="material-symbols-outlined">chat</span>
            </button>
          </div>
        </div>
        <div className="sideBarSearch">
          <div className="sideBarSearchContainer">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search Contact"></input>
          </div>
        </div>
        <div className="sideBarChats">
          <SideBarChat addNewChat />
          {group.map((val) => {
            return <SideBarChat name={val.name} key={val.id} id={val.id} />;
          })}
        </div>
      </div>
   
  );
};

export default SideBar;
