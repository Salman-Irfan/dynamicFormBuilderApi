// controllers/apiControllers/v1Controllers/userControllers/createUserController.js
import { User } from "../../../../models/User.js";
import { Company } from "../../../../models/Company.js";

// Controller to create a new user and assign them to companies
export const createUserController = async (req, res) => {
  try {
    const { name, email, companyIds } = req.body;

    // Ensure required fields are provided
    if (!name || !email || !Array.isArray(companyIds)) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and companyIds are required",
      });
    }

    // Check if email already exists (case-insensitive)
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "User with this email already exists",
      });
    }

    // Validate provided company IDs (must exist in DB)
    const companies = await Company.find({ _id: { $in: companyIds } });
    if (companies.length !== companyIds.length) {
      return res.status(400).json({
        success: false,
        error: "One or more company IDs are invalid",
      });
    }

    // Create and save the new user
    const newUser = new User({
      name,
      email: email.toLowerCase(),
      companies: companyIds,
    });

    await newUser.save();

    // Send success response
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });

  } catch (err) {
    // Handle unexpected server errors
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
