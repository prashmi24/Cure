import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { parsePhoneNumberFromString } from "libphonenumber-js";

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
      type: String,
      validate: {
        validator: function (v) {
          const phoneNumber = parsePhoneNumberFromString(v);
          return phoneNumber ? phoneNumber.isValid() : false;
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
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
      maxLength: 500,
    },
    timeSlots: {
      type: [String],
      default: [],
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

// Password hashing middleware
DoctorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Password comparison method
DoctorSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

DoctorSchema.index({ email: 1 });
DoctorSchema.index({ averageRating: -1 });
DoctorSchema.index({ isApproved: 1 });
DoctorSchema.index({ specialization: 1 });

export default mongoose.model("Doctor", DoctorSchema);
