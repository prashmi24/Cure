import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";
import reviewRoute from "./routes/review.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

//  middleware
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// CORS Setup
app.use(
  cors({
    origin: ["https://cure-me.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

// ensuring critical environment variables are present
if (!process.env.MONGO_URL || !process.env.JWT_SECRET_KEY) {
  console.error("Critical environment variables are missing!");
  process.exit(1);
}

//  database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected");
  } catch (err) {
    console.log("Database connection failed", err.message);
  }
};

// Routes
app.get("/", (req, res) => {
  res.status(200).json("Api is working");
});

// Route Middleware
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctor", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: err.message,
  });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

// Start the server
const server = app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received. Closing server...");
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log("Database connection closed");
      process.exit(0);
    });
  });
});
