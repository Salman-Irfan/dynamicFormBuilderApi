import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: String,
},{
    timestamps: true,
});

export const Company = mongoose.model("companies", companySchema);
