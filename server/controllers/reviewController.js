import Review from "../models/reviewSchema.js";
import Doctor from "../models/doctorSchema.js";

// getting all reviews

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res
      .status(200)
      .json({ success: true, message: "Successful", data: reviews });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

// create review

export const createReview = async (req, res) => {
  if (!req.body.doctor) {
    req.body.doctor = req.params.doctorId;
  }
  if (!req.body.user) {
    req.body.user = req.params.userId;
  }

  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });
    res
      .status(200)
      .json({ success: true, message: "Review Submitted", data: savedReview });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
