import User from "../models/userSchema.js";
import Booking from "../models/bookingSchema.js";
import Doctor from "../models/doctorSchema.js";

// Update User Profile
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

// Delete User (with booking check)
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Check if user has active bookings
    const activeBookings = await Booking.find({ user: id, status: "pending" });
    if (activeBookings.length > 0) {
      return res.status(400).json({
        success: false,
        message: "User has active bookings, cannot delete",
      });
    }

    await user.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "User Successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

// Get Single User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password").lean();
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User found", data: user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error while fetching user" });
  }
};

// Get All Users
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

// Get User Profile
export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId).select("namer email phone").lean();
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      message: "Profile loaded",
      data: user,
    });
  } catch (error) {
    console.error("Error loading profile:", error);
    res.status(500).json({ success: false, message: "Failed to load profile" });
  }
};

// Get Appointments (optimized with populate)
export const getMyAppointments = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId })
      .populate("doctor", "-password")
      .lean();

    if (!bookings.length) {
      return res
        .status(404)
        .json({ success: false, message: "No bookings found" });
    }

    res.status(200).json({
      success: true,
      message: "Appointments found",
      data: bookings,
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
