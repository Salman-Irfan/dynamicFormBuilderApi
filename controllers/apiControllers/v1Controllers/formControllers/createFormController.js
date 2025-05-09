import { Form } from "../../../../models/Form.js";
import { User } from "../../../../models/User.js";
import { Company } from "../../../../models/Company.js";

// Controller to create a new form with validation
export const createFormController = async (req, res) => {
  try {
    const { title, sections, assignedUsers = [], assignedCompanies = [] } = req.body;

    // Validate required fields
    if (!title || !sections?.length) {
      return res.status(400).json({
        success: false,
        error: "Title and at least one section are required",
      });
    }

    // Check if all provided user IDs are valid and exist
    const validUsers = await User.find({ _id: { $in: assignedUsers } });
    if (validUsers.length !== assignedUsers.length) {
      return res.status(400).json({
        success: false,
        error: "One or more assigned user IDs are invalid",
      });
    }

    // Check if all provided company IDs are valid and exist
    const validCompanies = await Company.find({ _id: { $in: assignedCompanies } });
    if (validCompanies.length !== assignedCompanies.length) {
      return res.status(400).json({
        success: false,
        error: "One or more assigned company IDs are invalid",
      });
    }

    // Create and save the new form
    const form = new Form({
      title,
      sections,
      assignedUsers,
      assignedCompanies,
    });

    await form.save();

    return res.status(201).json({
      success: true,
      message: "Form created successfully",
      form,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
