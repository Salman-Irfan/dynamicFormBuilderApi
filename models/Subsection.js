import mongoose from "mongoose";

const subsectionSchema = new mongoose.Schema({
  title: String,
  tasks: [taskSchema],
},{
    timestamps: true,
});

export const Subsection = mongoose.model("subsections", subsectionSchema);