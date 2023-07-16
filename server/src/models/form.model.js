import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["soft skills", "technical skills"],
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      skill: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ["open", "closed", "scale", "yesno"],
        required: true,
      },
      options: {
        type: [String],
        default: undefined,
      },
    },
  ],
  comments: {
    praise: {
      type: Boolean,
      default: false,
    },
    normal: {
      type: Boolean,
      default: true,
    },
  },
});

const Form = mongoose.model("Form", FormSchema);

export default Form;