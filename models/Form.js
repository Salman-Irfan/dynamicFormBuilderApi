// /models/Form.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    answerType: {
      type: String,
      enum: ["TextField", "Dropdown"],
      required: true,
    },
    options: [String], // Only used if answerType is "Dropdown"
  },
  { _id: false }
);

const subsectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    tasks: [taskSchema], // each subsection has tasks
  },
  { _id: false }
);

const sectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subsections: [subsectionSchema], // each section has sub sections
  },
  { _id: false }
);

const formSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    sections: [sectionSchema], // Array of sections
    assignedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    assignedCompanies: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    ],
  },
  {
    timestamps: true,
  }
);

export const Form = mongoose.model("Form", formSchema);
