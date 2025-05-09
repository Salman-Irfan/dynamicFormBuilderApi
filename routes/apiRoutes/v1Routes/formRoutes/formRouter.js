import express from "express";
import { createFormController } from "../../../../controllers/apiControllers/v1Controllers/formControllers/createFormController.js";
import { getAllFormsController } from "../../../../controllers/apiControllers/v1Controllers/formControllers/getAllFormsController.js";
import { submitFormResponseController } from "../../../../controllers/apiControllers/v1Controllers/formControllers/submitFormResponseController.js";
import { getAllFormResponsesController } from "../../../../controllers/apiControllers/v1Controllers/formControllers/getAllFormResponsesController.js";

export const formRouter = express.Router();

// Create a form
formRouter.post("/create-form", createFormController);

// Get all forms
formRouter.get("/get-all-forms", getAllFormsController);

// submit response to a form
formRouter.post("/submit-response", submitFormResponseController)

// route to get all form responses
formRouter.get("/get-all-form-responses", getAllFormResponsesController);
