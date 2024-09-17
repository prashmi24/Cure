import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
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
      validate: {
        validator: function (v) {
          return /^[0-9]{10,15}$/.test(v); // Validate phone number length (adjust as needed)
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    photo: { type: String },
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

export default mongoose.model("User", UserSchema);
