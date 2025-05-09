import express from 'express';
import { companyRouter } from './companyRoutes/companyRouter.js';
import { userRouter } from './userRoutes/userRouter.js';
export const v1Router = express.Router();

v1Router.use(`/company`, companyRouter)
v1Router.use("/user", userRouter);