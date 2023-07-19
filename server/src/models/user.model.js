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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    subrole: {
      type: String,
      enum: ["team leader", "employee"],
    },
    equip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Equip"
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
