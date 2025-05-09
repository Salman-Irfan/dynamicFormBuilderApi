// /controllers/apiControllers/v1Controllers/formResponseControllers/getAllFormResponsesController.js

import { FormResponse } from "../../../../models/FormResponse.js";

// Controller to fetch all form responses with related data populated
export const getAllFormResponsesController = async (req, res) => {
  try {
    // Fetch all responses and populate form, user, and company references
    const responses = await FormResponse.find()
      .populate("form", "title")        // Only populate the form's title
      .populate("user", "name email")   // Only populate user's name and email
      .populate("company", "name");     // Only populate company's name

    res.status(200).json({
      success: true,
      total: responses.length,
      responses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
