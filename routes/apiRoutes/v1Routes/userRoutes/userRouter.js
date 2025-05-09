// routes/apiRoutes/v1Routes/user.routes.js
import express from "express";
import { createUserController } from "../../../../controllers/apiControllers/v1Controllers/userControllers/createUserController.js";
import { getAllUsersController } from "../../../../controllers/apiControllers/v1Controllers/userControllers/getAllUsersController.js";

export const userRouter = express.Router();

userRouter.post("/create-user", createUserController);
userRouter.get("/get-all-users", getAllUsersController);