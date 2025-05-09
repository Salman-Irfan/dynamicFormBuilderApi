import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  title: String,
  subsections: [subsectionSchema],
}, {
  timestamps: true,
});

export const Section = mongoose.model("Section", sectionSchema);