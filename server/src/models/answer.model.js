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
  answers: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

export default mongoose.model("Response", ResponseSchema);
