import express from "express";
import {
  getAllReviews,
  createReview,
} from "../controllers/reviewController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import { body, validationResult } from "express-validator";

const router = express.Router({ mergeParams: true });

// Middleware to handle validation errors
const validateReview = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

// Fetch all reviews for a specific doctor
router
  .route("/")
  .get(getAllReviews)
  .post(
    authenticate,
    restrict(["patient"]),
    [
      body("rating")
        .isInt({ min: 1, max: 5 })
        .withMessage("Rating must be between 1 and 5"),
      body("comment").not().isEmpty().withMessage("Comment is required"),
    ],
    validateReview,
    createReview
  );

export default router;
