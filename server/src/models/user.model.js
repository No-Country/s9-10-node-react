import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["designer", "frontend", "backend", "tester", "devops", "team leader", "project manager"],
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
