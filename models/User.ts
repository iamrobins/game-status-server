import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firebaseId: { type: String, required: true },
    admin: { type: Boolean, default: false },
    email: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
