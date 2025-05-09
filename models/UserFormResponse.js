import mongoose from "mongoose";

const userFormResponseSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    form: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    responses: [
      {
        taskId: String,
        answer: mongoose.Schema.Types.Mixed, // Text or Dropdown option
      },
    ],
    submittedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const UserFormResponse = mongoose.model("UserFormResponse", userFormResponseSchema);
