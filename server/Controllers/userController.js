import User from "../models/userSchema.js";
import Booking from "../models/bookingSchema.js";
import Doctor from "../models/doctorSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).lean();

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password").lean();
    if (!user) {
      return res.status(404).json({ success: false, message: "No user found" });
    }
    res.status(200).json({ success: true, message: "User found", data: user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ success: false, message: "No user found" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password").lean();
    res
      .status(200)
      .json({ success: true, message: "Users found", data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const { password, ...rest } = user;
    res
      .status(200)
      .json({ success: true, message: "Loading Profile", data: rest });
  } catch (error) {
    console.error("Error loading profile:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId }).lean();
    const doctorIds = bookings.map((booking) => booking.doctor.id);
    const doctors = await Doctor.find({ _id: { $in: doctorIds } })
      .select("-password")
      .lean();

    res
      .status(200)
      .json({
        success: true,
        message: "Finding Doctor",
        data: { bookings, doctors },
      });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
