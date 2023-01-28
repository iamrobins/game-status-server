import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    firebaseId: { type: String, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
