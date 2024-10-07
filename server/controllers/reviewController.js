import Review from "../models/reviewSchema.js";
import Doctor from "../models/doctorSchema.js";
import mongoose from "mongoose";
import Joi from "joi";

// Validation schema
const reviewValidationSchema = Joi.object({
  rating: Joi.number().min(1).max(5).required(),
  comment: Joi.string().required(),
  doctor: Joi.string().required(),
  user: Joi.string().required(),
});

// getting all reviews
export const getAllReviews = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const reviews = await Review.find({})
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean();
    const totalReviews = await Review.countDocuments();

    if (!reviews || reviews.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No reviews found" });
    }
    res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      data: reviews,
      totalPages: Math.ceil(totalReviews / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch reviews" });
  }
};

// create a new review
export const createReview = async (req, res) => {
  const { error } = reviewValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { rating, comment, doctor, user } = req.body;

    const newReview = new Review({
      rating,
      comment,
      doctor,
      user,
    });

    const savedReview = await newReview.save({ session });
    await Doctor.findByIdAndUpdate(
      doctor,
      {
        $push: { reviews: savedReview._id },
      },
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    res
      .status(201)
      .json({
        success: true,
        message: "Review submitted successfully",
        data: savedReview,
      });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error creating review:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to submit review" });
  }
};
