import { Company } from "../../../../models/Company.js";

export const getAllCompaniesController = async (req, res) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json({
      success: true,
      companies,
    });
  } catch (error) {
    console.error("Error fetching companies:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,});
  }
};
