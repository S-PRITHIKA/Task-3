import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import './Chat.css';
import axios from "axios";

const socket = io("http://localhost:5000");

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [userId] = useState("user1");
  const [receiverId] = useState("user2");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected to WebSocket");
    });

    // JOIN ROOM
    socket.emit("join_room", userId);

    // LOAD PREVIOUS MESSAGES
    axios.get(`http://localhost:5000/api/chat/${userId}/${receiverId}`)
      .then(res => setChat(res.data))
      .catch(err => console.error("❌ Fetch failed:", err));

    // RECEIVE INCOMING MESSAGE
    socket.on("receive_message", (data) => {
      console.log("📩 New Message:", data);
      setChat(prev => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, receiverId]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const msgData = {
      from: userId,
      to: receiverId,
      message: message,
    };

    console.log("📤 Sending:", msgData);
    socket.emit("send_message", msgData);
    setChat(prev => [...prev, msgData]); // Show immediately
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
