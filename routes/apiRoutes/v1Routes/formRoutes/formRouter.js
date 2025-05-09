import express from "express";
import { createFormController } from "../../../../controllers/apiControllers/v1Controllers/formControllers/createFormController.js";
import { getAllFormsController } from "../../../../controllers/apiControllers/v1Controllers/formControllers/getAllFormsController.js";

export const formRouter = express.Router();

// Create a form
formRouter.post("/create-form", createFormController);

// Get all forms
formRouter.get("/get-all-forms", getAllFormsController);
