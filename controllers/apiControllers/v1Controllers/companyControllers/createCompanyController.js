import {Company} from "../../../../models/Company.js";

// Create new company
export const createCompanyController = async (req, res) => {
  try {
    const { name } = req.body;

    const existing = await Company.findOne({ name });
    if (existing) {
      return res.status(400).json({ 
        success: false,
        error: "Company already exists" 
      });
    }

    const newCompany = new Company({ name });
    await newCompany.save();
    res.status(201).json({
      success: true,
      message: "Company created successfully",
      newCompany
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
};

