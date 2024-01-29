import React, { useState, useEffect } from "react";
import "./ChatBox.css";
import dp2 from "./img/dp2.png";
import { useParams } from "react-router-dom";
import {
  addDoc,
  onSnapshot,
  doc,
  collection,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";

const ChatBox = () => {
  const groupID = useParams().groupID;
  const [groupName, setGroupName] = useState();
  const [input, setInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  const readData = () => {
    if (groupID) {
      onSnapshot(doc(db, "groups", groupID), (snapshot) => {
        setGroupName(snapshot.data().name);
      });
      const q = query(
        collection(db, "groups", groupID, "messages"),
        orderBy("timestamp", "asc")
      );
      onSnapshot(q, (snapshot) => {
        let msgList = [];
        snapshot.docs.forEach((doc) => {
          msgList.push({ ...doc.data() });
        });
        setMessageList(msgList);
      });
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      return alert("Please enter your message");
    } else {
      try {
        const sendData = await addDoc(
          collection(db, "groups", groupID, "messages"),
          {
            message: input,
            name: "pooja",
            timestamp: serverTimestamp(),
          }
        );
      } catch (error) {
        console.error("error", error);
      }
    }
    setInput("");
  };

  useEffect(() => {
    readData(); // eslint-disable-next-line
  }, [groupID]);

  return (
    <div className="chatBox">
      <div className="chatHeader">
        <img className="dp" src={dp2} alt="user" />
        <div className="chatHeaderInfo">
          <h3>{groupName}</h3>
          <p>
            Last seen at{" "}
            {new Date(
              messageList[messageList.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>
        <div className="chatHeaderRight"></div>
        <button className="g-btn">
          <span className="material-symbols-outlined" style={{ margin: "5px" }}>
            search
          </span>
        </button>
        <button className="g-btn">
          <span className="material-symbols-outlined" style={{ margin: "5px" }}>
            attach_file
          </span>
        </button>
        <button className="g-btn">
          <span className="material-symbols-outlined" style={{ margin: "5px" }}>
            more_vert
          </span>
        </button>
      </div>
      <div className="chatBody">
        {messageList.map((msg) => {
          return (
            <p
              className={`chatMessage ${
                msg.name === "pooja" && "chatReceiver"
              }`}
            >
              <span className="chatName">{msg.name}</span>
              {msg.message}
              <span className="timestamp">
                {new Date(msg.timestamp?.toDate()).toUTCString()}
              </span>
            </p>
          );
        })}
      </div>
      <div className="chatFooter">
        <span className="material-symbols-outlined">mood</span>
        <form
          onSubmit={(e) => {
            sendMessage(e);
          }}
        >
          <input
            value={input}
            type="text"
            placeholder="Type a message"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="g-btn" type="submit2">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "larger" }}
            >
              send
            </span>
          </button>
          <button className="g-btn">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "larger" }}
            >
              mic
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
