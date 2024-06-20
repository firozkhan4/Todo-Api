import mongoose, { mongo } from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  [{ timestamps: true }]
);

export default mongoose.model("Todo", TodoSchema);
