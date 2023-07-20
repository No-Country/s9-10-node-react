import mongoose from "mongoose";
const FormSchema = new mongoose.Schema({
  title: {
    type: String,
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
      category: {
        type: String,
        enum: ["soft", "technical"],
        required: true,
      },
      type: {
        type: String,
        required: true,
        enum: ["open", "closed", "scale", "yesno", "multiple"],
      },
      options: {
        type: [String],
        default: undefined,
      },
      scaleRange: {
        min: {
          type: Number,
          required: function () {
            return this.type === "scale";
          },
        },
        max: {
          type: Number,
          required: function () {
            return this.type === "scale";
          },
        },
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

export default mongoose.model("Form", FormSchema);
