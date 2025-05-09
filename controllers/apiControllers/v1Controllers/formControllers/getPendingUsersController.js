import { Form } from "../../../../models/Form.js";
import { FormResponse } from "../../../../models/FormResponse.js";
import { User } from "../../../../models/User.js";

// GET users who haven't submitted response for a form in a specific company
export const getPendingUsersController = async (req, res) => {
  try {
    const { formId, companyId } = req.params;

    // Get the form and check if it exists
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ success: false, error: "Form not found" });
    }

    // Get all users assigned to the form
    const assignedUserIds = form.assignedUsers.map(user => user.toString());

    // Get all users who have submitted response for this form & company
    const submittedResponses = await FormResponse.find({
      form: formId,
      company: companyId,
    }).select("user");

    const submittedUserIds = submittedResponses.map(
      (res) => res.user.toString()
    );

    // Filter pending users
    const pendingUserIds = assignedUserIds.filter(
      (userId) => !submittedUserIds.includes(userId)
    );

    const pendingUsers = await User.find({ _id: { $in: pendingUserIds } }).select("name email");

    return res.status(200).json({
      success: true,
      pendingUsers,
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
