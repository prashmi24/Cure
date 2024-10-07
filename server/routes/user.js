import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  getMyAppointments,
  getUserProfile,
} from "../controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import mongoose from "mongoose";

// Middleware to validate ObjectId
const validateId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }
  next();
};

const router = express.Router();

router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
router.get(
  "/appointments/my-appointments",
  authenticate,
  restrict(["patient"]),
  getMyAppointments
);

router.get(
  "/:id",
  authenticate,
  restrict(["patient"]),
  validateId,
  getSingleUser
);
router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.put("/:id", authenticate, restrict(["patient"]), validateId, updateUser);
router.delete(
  "/:id",
  authenticate,
  restrict(["patient"]),
  validateId,
  deleteUser
);

export default router;
