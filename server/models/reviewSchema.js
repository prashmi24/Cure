import mongoose from "mongoose";
import Doctor from "./doctorSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
      maxLength: 500,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });
  next();
});

reviewSchema.statics.calcAverageRatings = async function (doctorId) {
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId },
    },
    {
      $group: {
        _id: "$doctor",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  if (stats.length > 0) {
    await Doctor.findByIdAndUpdate(doctorId, {
      totalRating: stats[0].numOfRating,
      averageRating: stats[0].avgRating,
    });
  } else {
    await Doctor.findByIdAndUpdate(doctorId, {
      totalRating: 0,
      averageRating: 0,
    });
  }
};

//recalculating ratings

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.doctor);
});

reviewSchema.post("remove", function () {
  this.constructor.calcAverageRatings(this.doctor);
});

reviewSchema.post("findOneAndUpdate", function (doc) {
  if (doc) {
    doc.constructor.calcAverageRatings(doc.doctor);
  }
});

reviewSchema.index({ doctor: 1 });
reviewSchema.index({ user: 1 });

export default mongoose.model("Review", reviewSchema);
