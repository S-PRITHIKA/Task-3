// import mongoose from 'mongoose';

// const chatMessageSchema = new mongoose.Schema({
//   from: { type: String, required: true },
//   to: { type: String, required: true },
//   message: { type: String, required: true },
//   timestamp: { type: Date, default: Date.now }
// });

// export default mongoose.model("ChatMessage", chatMessageSchema);

import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("ChatMessage", ChatSchema);
