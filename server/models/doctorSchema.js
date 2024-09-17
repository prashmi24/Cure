import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      match: [/^\d{10}$/, "Please provide a valid 10-digit phone number"],
    },
    photo: {
      type: String,
    },
    ticketPrice: {
      type: Number,
      min: 0,
    },
    role: {
      type: String,
      default: "doctor",
    },

    // Fields for doctors only
    specialization: {
      type: String,
    },
    qualifications: {
      type: [String],
    },

    experiences: {
      type: [String],
    },

    bio: {
      type: String,
      maxLength: 50,
    },
    about: {
      type: String,
    },
    timeSlots: {
      type: [String],
    },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalRating: {
      type: Number,
      default: 0,
      min: 0,
    },
    isApproved: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
  },
  { timestamps: true }
);

DoctorSchema.index({ email: 1 });
DoctorSchema.index({ averageRating: -1 });
DoctorSchema.index({ isApproved: 1 });

export default mongoose.model("Doctor", DoctorSchema);
