import Review from "../models/reviewSchema.js";
import Doctor from "../models/doctorSchema.js";

// getting all reviews

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({}).lean();
    if (!reviews || reviews.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No reviews found" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Reviews fetched successfully",
        data: reviews,
      });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch reviews" });
  }
};

// create review

export const createReview = async (req, res) => {
  try {
    const { rating, comment, doctor, user } = req.body;

    // Validate required fields
    if (!rating || !comment || !doctor || !user) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Rating, comment, doctor, and user are required",
        });
    }

    const newReview = new Review({
      rating,
      comment,
      doctor: req.body.doctor || req.params.doctorId,
      user: req.body.user || req.params.userId,
    });

    const savedReview = await newReview.save();
    await Doctor.findByIdAndUpdate(savedReview.doctor, {
      $push: { reviews: savedReview._id },
    });
    res
      .status(201)
      .json({ success: true, message: "Review Submitted", data: savedReview });
  } catch (error) {
    console.error("Error creating review:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to submit review" });
  }
};
