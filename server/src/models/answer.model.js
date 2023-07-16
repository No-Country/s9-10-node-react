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
  answers: [
    {
      question: {
        type: String,
        required: true,
      },
      value: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
    },
  ],
});

const Response = mongoose.model("Response", ResponseSchema);

export default Response;
