import Doctor from "../models/doctorSchema.js";
import Booking from "../models/bookingSchema.js";

// Function for fetching a doctor
const getDoctorById = async (id) => {
  return await Doctor.findById(id).select("-password").lean();
};

// Update Doctor Profile
export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    if (!updatedDoctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update doctor" });
  }
};

// Delete Doctor (with bookings check)
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    // Check if doctor has upcoming appointments
    const upcomingBookings = await Booking.find({
      doctor: id,
      appointmentDate: { $gte: new Date() },
    });

    if (upcomingBookings.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Doctor has upcoming appointments",
      });
    }

    await doctor.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Doctor successfully deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete doctor" });
  }
};

// Get Single Doctor
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password")
      .lean();
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Doctor found", data: doctor });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve doctor" });
  }
};

// Get All Doctors (with specialization filter)
export const getAllDoctor = async (req, res) => {
  try {
    const { query, specialization } = req.query;
    let searchCriteria = { isApproved: "approved" };

    if (query) {
      searchCriteria.name = { $regex: query, $options: "i" };
    }

    if (specialization) {
      searchCriteria.specialization = specialization;
    }

    const doctors = await Doctor.find(searchCriteria)
      .select("-password")
      .lean();

    if (doctors.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No doctors found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Doctor found", data: doctors });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve doctors" });
  }
};

// Get Doctor Profile (with appointments)
export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;
  try {
    const doctor = await Doctor.findById(doctorId).select("-password");

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    const appointments = await Booking.find({ doctor: doctorId }).lean();

    res.status(200).json({
      success: true,
      message: "Profile loaded",
      data: { doctor, appointments },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to load doctor profile" });
  }
};
