// models/User.js
import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    // User name (not required in this schema, but can be validated if needed)
    name: {
      type: String,
      required: true, 
      trim: true, 
    },

    // Email should be unique and required
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true, // Ensures case-insensitive storage
      trim: true,
    },

    // Array of references to companies the user is part of
    companies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Export the User model
export const User = mongoose.model("User", userSchema);
