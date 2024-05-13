import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import uploadImageToCloudinary from "./../../utils/uploadCloudinary.js";
import { BASE_URL, token } from "./../../config.js";
import { toast } from "react-toastify";

const DoctorProfileSettings = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialty: "",
    amount: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
    otherSpecialty: "",
  });

  useEffect(() => {
    // Update form data when doctor data changes
    // For security reasons, password is not stored in form data
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialty: doctorData?.specialty,
      amount: doctorData?.amount,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
      otherSpecialty: "",
    });
  }, [doctorData]);

  // Handle input change for form fields
  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle file input change for photo upload
  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    // setFormData({ ...formData, photo: data?.url });
  };

  // Handle profile update submission
  const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/doctor/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      toast.success(message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Add item to array field in form data
  // const addItem = (key, item) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [key]: [...prevFormData[key], item],
  //   }));
  // };
  const addItem = (key, item) => {
    setFormData((prevFormData) => {
      const prevItems = prevFormData[key] || []; // Initialize as empty array if undefined
      return {
        ...prevFormData,
        [key]: [...prevItems, item],
      };
    });
  };

  // Handle input change for reusable form fields (qualifications, experiences, timeSlots)
  const handleReusableInputChange = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];
      updateItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  // Delete item from array field in form data
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  // Add qualification item to form data
  const addQualification = (e) => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChange("qualifications", index, event);
  };

  // Delete qualification item from form data
  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  // Add experience item to form data
  const addExperience = (e) => {
    e.preventDefault();
    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "",
      hospital: "",
    });
  };

  const handleExperienceChange = (event, index) => {
    handleReusableInputChange("experiences", index, event);
  };

  // Delete experience item from form data
  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };

  // Add time slot item to form data
  const addTimeSlot = (e) => {
    e.preventDefault();
    addItem("timeSlots", {
      day: "",
      startingTime: "",
      endingTime: "",
    });
  };

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChange("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <div>
      {/* Profile Information */}
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form>
        {/* Name */}
        <div className="mb-5">
          <p className="form-label">
            Name<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form-input"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <p className="form-label">
            Email<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form-input"
            readOnly
            aria-readonly
            disabled="true"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-5">
          <p className="form-label">
            Phone<span className="text-red-500">*</span>
          </p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="form-input"
          />
        </div>

        {/* Bio */}
        <div className="mb-5">
          <p className="form-label">
            Bio<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form-input"
          />
        </div>

        {/* Gender */}
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form-label">
                Gender<span className="text-red-500">*</span>
              </p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form-input py-3.5"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Specialty */}
            <div>
              <p className="form-label">
                Specialty<span className="text-red-500">*</span>
              </p>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="form-input py-3.5"
              >
                <option value="cardiology">Cardiology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="dermatology">Dermatology</option>
                <option value="oncology">Oncology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="neurology">Neurology</option>
                <option value="other">Other</option>
              </select>

              {/* If "Other" is selected, show an additional input field */}
              {formData.specialty === "other" && (
                <input
                  type="text"
                  name="otherSpecialty"
                  value={formData.otherSpecialty}
                  onChange={handleInputChange}
                  placeholder="Other Specialty"
                  className="form-input py-3.5 mt-2 cursor-text"
                />
              )}
            </div>

            {/* Amount */}
            <div>
              <p className="form-label">
                Amount<span className="text-red-500">*</span>
              </p>
              <input
                name="amount"
                placeholder="1000"
                value={formData.amount}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>
        </div>

        {/* qualification */}

        <div className="mb-5">
          <p className="form-label">
            {" "}
            Qualifications<span className="text-red-500">*</span>
          </p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form-label">Starting Date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form-input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form-label">Ending Date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form-input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form-label">
                      Degree<span className="text-red-500">*</span>
                    </p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form-input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form-label">
                      University<span className="text-red-500">*</span>
                    </p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form-input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="bg-primaryColor mt-5 p-2 rounded-full text-white text-[18px] mb-[30px] cursor-pointer"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addQualification}
            className="h-fit rounded bg-primaryColor text-white py-2 px-5 cursor-pointer "
          >
            Add Qualifications
          </button>
        </div>

        {/* experience */}

        <div className="mb-5">
          <p className="form-label">
            {" "}
            Experience<span className="text-red-500">*</span>
          </p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form-label">Starting Date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form-input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form-label">Ending Date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form-input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form-label">
                      Position<span className="text-red-500">*</span>
                    </p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form-input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form-label">
                      Hospital<span className="text-red-500">*</span>
                    </p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form-input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className="bg-primaryColor mt-5 p-2 rounded-full text-white text-[18px] mb-[30px] cursor-pointer"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addExperience}
            className="h-fit rounded bg-primaryColor text-white py-2 px-5 cursor-pointer "
          >
            Add Experience
          </button>
        </div>

        {/* timeslots */}

        <div className="mb-5">
          <p className="form-label">
            Available Time Slots<span className="text-red-500">*</span>
          </p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form-label">
                      Day<span className="text-red-500">*</span>
                    </p>

                    <select
                      name="day"
                      value={item.day}
                      className="form-input py-3.5"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    >
                      <option value="sun">Sunday</option>
                      <option value="mon">Monday</option>
                      <option value="tues">Tuesday</option>
                      <option value="wed">Wednesday</option>
                      <option value="thurs">Thursday</option>
                      <option value="fri">Friday</option>
                      <option value="sat">Saturday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form-label">Starting Time</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form-input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form-label">Ending Time</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form-input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={(e) => deleteTimeSlot(e, index)}
                      className="bg-primaryColor mt-6 p-2 rounded-full text-white text-[18px] cursor-pointer"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={addTimeSlot}
            className="h-fit rounded bg-primaryColor text-white py-2 px-5 cursor-pointer "
          >
            Add TimeSlot
          </button>
        </div>

        {/* about */}

        <div className="mb-5">
          <p className="form-label">
            About<span className="text-red-500">*</span>
          </p>
          <textarea
            name="about"
            value={formData.about}
            placeholder="About"
            onChange={handleInputChange}
            className="form-input"
            rows={10}
          ></textarea>
        </div>

        {/* photo */}

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo}
                alt="upload-img"
                className="w-full rounded-full"
              />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              value={formData.photo}
              onChange={handleFileInputChange}
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#fda521] text-white font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-rounded-lg"
            onClick={updateProfileHandler}
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorProfileSettings;
