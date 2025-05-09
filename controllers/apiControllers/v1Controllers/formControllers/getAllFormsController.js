import { Form } from "../../../../models/Form.js";

// Controller to get all forms with full nested population
export const getAllFormsController = async (req, res) => {
  try {
    // Fetch all forms and populate user and company references
    const forms = await Form.find()
    .populate("assignedUsers", "name email") // only populate selected user fields
    .populate("assignedCompanies", "name"); // only populate company name

    return res.status(200).json({
      success: true,
      count: forms.length,
      forms,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
