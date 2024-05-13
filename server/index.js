import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";
import reviewRoute from "./routes/review.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: ["https://cure-server.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.json("Api is working");
  // res.send("Api is working");
});

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

//  middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctor", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});
