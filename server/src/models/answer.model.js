import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    required: true,
  },
  comment: {
    type: String,
    enum: ["comment", "praise"],
    default: "comment", // Comentario por defecto es "comment"
  },
  answers: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Form.questions",
        required: true,
      },
      skillId: {
        type: String,
        ref: "Skill",
        required: true,
      },
      category: {
        type: String,
        enum: ["soft", "technical"],
        required: true,
      },
      type: {
        type: String,
        enum: ["open", "closed", "scale", "yesno", "multiple"],
        required: true,
      },
      score: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
    },
  ],
});

export default mongoose.model("Response", ResponseSchema);