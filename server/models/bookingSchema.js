import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
      index: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    ticketPrice: {
      type: Number,
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (v) {
          return v.getTime() > Date.now();
        },
        message: "Appointment date must be in the future",
      },
      index: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled", "completed", "no-show"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

bookingSchema.index({ user: 1, doctor: 1, appointmentDate: 1 });
bookingSchema.index({ status: 1 });

export default mongoose.model("Booking", bookingSchema);
