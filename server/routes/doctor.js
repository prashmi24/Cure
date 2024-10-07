import express from "express";
import {
  deleteDoctor,
  updateDoctor,
  getAllDoctor,
  getSingleDoctor,
  getDoctorProfile,
} from "../controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";
import mongoose from "mongoose";

// Validation Middleware for ObjectId
const validateId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }
  next();
};

const router = express.Router();
router.use("/:doctorId/reviews", reviewRouter);
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

router.get("/:id", validateId, getSingleDoctor);
router.get("/", getAllDoctor);
router.put(
  "/:id",
  authenticate,
  restrict(["doctor"]),
  validateId,
  updateDoctor
);
router.delete(
  "/:id",
  authenticate,
  restrict(["doctor"]),
  validateId,
  deleteDoctor
);

export default router;
