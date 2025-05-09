import { FormResponse } from "../../../../models/FormResponse.js";
import { Form } from "../../../../models/Form.js";
import { User } from "../../../../models/User.js";
import { Company } from "../../../../models/Company.js";

// Controller to handle form submissions per user per company
export const submitFormResponseController = async (req, res) => {
  try {
    const { formId, userId, companyId, responses } = req.body;

    // Validate required fields
    if (!formId || !userId || !companyId || !Array.isArray(responses)) {
      return res.status(400).json({
        success: false,
        error: "formId, userId, companyId, and responses are required",
      });
    }

    // Validate user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Validate company exists
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ success: false, error: "Company not found" });
    }

    // Check user belongs to the given company
    const belongsToCompany = user.companies.includes(companyId);
    if (!belongsToCompany) {
      return res.status(403).json({
        success: false,
        error: "User does not belong to the specified company",
      });
    }

    // Validate form exists
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ success: false, error: "Form not found" });
    }

    // Check if user is assigned to this form
    const isAssigned = form.assignedUsers.includes(userId);
    if (!isAssigned) {
      return res.status(403).json({
        success: false,
        error: "User is not assigned to this form",
      });
    }

    // Save the response
    const formResponse = new FormResponse({
      form: formId,
      user: userId,
      company: companyId,
      responses,
    });

    await formResponse.save();

    return res.status(201).json({
      success: true,
      message: "Form response submitted successfully",
      formResponse,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
