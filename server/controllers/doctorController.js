import Doctor from "../models/doctorSchema.js";
import Booking from "../models/bookingSchema.js";

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
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findByIdAndDelete(id);

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

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

export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [{ name: { $regex: query, $options: "i" } }],
      })
        .select("-password")
        .lean();
    } else {
      doctors = await Doctor.find({ isApproved: "approved" })
        .select("-password")
        .lean();
    }

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

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }
    const { password, ...rest } = doctor;
    const appointments = await Booking.find({ doctor: doctorId }).lean();
    res.status(200).json({
      success: true,
      message: "Loading Profile",
      data: { ...rest, appointments },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to load doctor profile" });
  }
};
