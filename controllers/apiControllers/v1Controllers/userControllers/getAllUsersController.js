import { User } from "../../../../models/User.js";

export const getAllUsersController = async (req, res) => {
  try {
    const users = await User.find().populate("companies", "name"); // populate only company name

    res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
