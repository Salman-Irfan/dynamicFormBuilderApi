import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  companies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }],
},{
    timestamps: true,
});

export const User = mongoose.model("users", userSchema);
