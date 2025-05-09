// index.js
import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./config/connectToMongoDB.js";
import cors from "cors";
import { apiRouter } from "./routes/apiRoutes/apiRouter.js";
// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
connectToMongoDB();

// API Routes
app.use(`/api`, apiRouter)

// Root route
app.get("/", (req, res) => {
  res.send("Dynamic Form System API is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
