import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  answerType: { type: String, enum: ["TextField", "Dropdown"], required: true },
  options: [String], // Only used if answerType === "Dropdown"
},{
    timestamps: true,
});

export const Task = mongoose.model("tasks", taskSchema);