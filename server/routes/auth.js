import express from "express";
import { register, login } from "../Controllers/authController.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("name").not().isEmpty().withMessage("Name is required"),
  ],
  register
);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").not().isEmpty().withMessage("Password is required"),
  ],
  login
);

export default router;
