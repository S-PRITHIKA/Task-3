import { useEffect, useState } from "react";
import socket from "../socket";

function Chat({ userId, receiverId }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
   
    socket.emit("join_room", userId);

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, [userId]);

  const sendMessage = () => {
    socket.emit("send_message", {
      message,
      receiverId
    });
    setMessage("");
  };

  return (
    <div>
      <h3>Real-Time Chat</h3>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>

      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg.from === socket.id ? "Me" : "Them"}: {msg.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;
