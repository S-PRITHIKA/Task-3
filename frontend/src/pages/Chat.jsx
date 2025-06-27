import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import './Chat.css';

const socket = io("http://localhost:5000");

function Chat({ userId, receiverId }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.emit("join_room", userId);

    axios.get(`http://localhost:5000/api/chat/${userId}/${receiverId}`)
      .then(res => setChat(res.data))
      .catch(err => console.error(err));

    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [userId, receiverId]);

  const sendMessage = () => {
    const msgData = {
      from: userId,
      to: receiverId,
      message,
    };
    socket.emit("send_message", msgData);
    setMessage(""); 
  };

  return (
    <div className="chat-widget">
      <h4>Chat as {userId}</h4>
      <div className="chat-messages">
        {chat.map((c, i) => (
          <div key={i} className={`chat-bubble ${c.from === userId ? "self" : "other"}`}>
            <strong>{c.from}:</strong> {c.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
