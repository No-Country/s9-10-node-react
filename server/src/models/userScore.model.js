import mongoose from "mongoose";

const UserScoreSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    skillId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
    },
    category: {
      type: String,
      enum: ["soft", "technical"],
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      enum: ["normal_comment", "praise"],
    },
    praise: {
      type: Boolean,
      default: false,
    },
    praiseCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const UserScore = mongoose.model("UserScore", UserScoreSchema);

export default UserScore;
