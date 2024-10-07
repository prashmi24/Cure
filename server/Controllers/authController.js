import User from "../models/userSchema.js";
import Doctor from "../models/doctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Joi from "joi";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};

const findUserByEmail = async (email) => {
  let user = await User.findOne({ email });
  if (!user) {
    user = await Doctor.findOne({ email });
  }
  return user;
};

// Register validation schema
const registerValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
  role: Joi.string().valid("patient", "doctor").required(),
  photo: Joi.string().optional(),
  gender: Joi.string().valid("male", "female", "other").optional(),
});

// Register controller
export const register = async (req, res) => {
  const { error } = registerValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { email, password, name, role, photo, gender } = req.body;
  try {
    let user = await findUserByEmail(email);

    // if user already exists
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    } else if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error, please try again later",
    });
  }
};

// Login controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // password matching
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid credentials" });
    }

    // get token
    const token = generateToken(user);
    const { password: _, role, appointments, ...rest } = user._doc;
    res.status(200).json({
      status: true,
      message: "Login Successful",
      token,
      data: userDetails,
      role,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Failed to Login" });
  }
};
