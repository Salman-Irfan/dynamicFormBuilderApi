import mongoose from "mongoose";

const responseSchema = new mongoose.Schema(
  {
    sectionTitle: { type: String, required: true },
    subsectionTitle: { type: String, required: true },
    taskTitle: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false } // Prevent Mongoose from auto-generating _id for sub-docs
);

const formResponseSchema = new mongoose.Schema(
  {
    form: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    responses: [responseSchema], // Array of answers per task
  },
  {
    timestamps: true,
  }
);

export const FormResponse = mongoose.model("FormResponse", formResponseSchema);
