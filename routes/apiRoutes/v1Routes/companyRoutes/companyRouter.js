// /routes/apiRoutes/v1Routes/company.routes.js
import express from 'express';
import { createCompanyController } from '../../../../controllers/apiControllers/v1Controllers/companyControllers/createCompanyController.js';
import { getAllCompaniesController } from '../../../../controllers/apiControllers/v1Controllers/companyControllers/getAllCompaniesController.js';

export const companyRouter = express.Router();

// Create a new company
companyRouter.post(`/create-company`, createCompanyController);

// Get all companies
companyRouter.get(`/get-all-companies`, getAllCompaniesController);
