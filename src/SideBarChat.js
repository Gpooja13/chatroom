import React, { useState, useEffect } from "react";
import "./SideBarChat.css";
import dp2 from "./img/dp2.png";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import { Link } from "react-router-dom";

const SideBarChat = ({ addNewChat, name, id }) => {
  const [lastMsg, setLastMsg] = useState("");

  const createChat = async () => {
    const group = prompt("Enter group name");
    if (group) {
      try {
        const docRef = await addDoc(collection(db, "groups"), {
          name: group,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const readData = () => {
    if (id) {
      const q = query(
        collection(db, "groups", id, "messages"),
        orderBy("timestamp", "asc")
      );
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setLastMsg(doc.data());
        });
      });
    }
  };

  useEffect(() => {
    readData();
  }, [id]);

  return !addNewChat ? (
    <Link to={`group/${id}`}>
      <div className="sideBarChat">
        <img
          className="dp"
          src={dp2}
          alt="user"
          style={{ width: "50px", height: "50px" }}
        />
        <div className="sideBarChatInfo">
          <h2>{name}</h2>
          <p className="text-message">{lastMsg.lastMsg}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sideBarChat" onClick={createChat}>
      <h3>Add New Chat</h3>
    </div>
  );
};

export default SideBarChat;
