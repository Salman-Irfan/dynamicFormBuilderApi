import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  title: String,
  sections: [sectionSchema],
  assignedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
},{
    timestamps: true,
});

export const Form = mongoose.model("forms", formSchema);