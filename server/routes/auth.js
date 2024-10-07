import express from "express";
import { register, login } from "../controllers/authController.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Middleware to handle validation errors
const validateInputs = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("name").not().isEmpty().withMessage("Name is required"),
    body("role")
      .isIn(["patient", "doctor"])
      .withMessage("Role must be either 'patient' or 'doctor'"),
  ],
  validateInputs,
  register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").not().isEmpty().withMessage("Password is required"),
  ],
  validateInputs,
  login
);

export default router;
