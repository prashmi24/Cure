import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
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
    role: {
      type: String,
      enum: ["patient", "admin"],
      default: "patient",
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    bloodType: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
  },
  {
    timestamps: true,
  }
);

// Password hashing middleware
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Password comparison method
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.index({ role: 1 });
UserSchema.index({ appointments: 1 });

export default mongoose.model("User", UserSchema);
