import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import ChatMessage from './models/ChatMessage.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());


io.on("connection", (socket) => {
  console.log("🔌 User connected:", socket.id);

  socket.on("join_room", (userId) => {
    socket.join(userId);  
    console.log(`✅ User joined room: ${userId}`);
  });

  console.log("Sending message:", msgData);

  socket.on("send_message", async (data) => {
    console.log("📨 Received message:", data);

    const newMsg = new ChatMessage(data);
    await newMsg.save();

    io.to(data.to).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

// Routes
app.get('/api/products', (req, res) => {
  res.json([
    { name: "Lipstick", description: "Matte pink shade", price: 499 },
    { name: "Foundation", description: "Flawless finish", price: 799 },
  ]);
});

app.get("/api/chat/:user1/:user2", async (req, res) => {
  const { user1, user2 } = req.params;
  const messages = await ChatMessage.find({
    $or: [
      { from: user1, to: user2 },
      { from: user2, to: user1 }
    ]
  }).sort({ timestamp: 1 });

  res.json(messages);
});


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`✅ Server running with WebSocket on port ${PORT}`);
});

console.log("Loaded MONGO_URL:", process.env.MONGO_URL);
