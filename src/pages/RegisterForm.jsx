import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    course: '',
    address: '',
    state: '',
    country: '',
    file: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSaveAndPreview = () => {
    navigate("/viewform", { state: formData });
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center py-10" style={{ backgroundImage: "url('/BG.jpg')" }}>
      <div className="absolute inset-0 bg-black/30 z-0 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-6xl bg-white border-4 border-[#D4D5D8] shadow-lg">
        <div className="bg-[#27187E] text-white py-4 px-6 text-center text-4xl font-extrabold">
          REGISTER YOURSELF
        </div>
        <div className="border-[#D4D5D8] border-3"></div>
        <div className="bg-[#FEA82F] p-8">
          <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name ......"
                className="bg-white p-3 rounded-md shadow"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Phone Number</label>
              <input
                type="number"
                placeholder="Enter your phone number ......"
                className="bg-white p-3 rounded-md shadow"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address ......"
                className="bg-white p-3 rounded-md shadow"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Date of Birth</label>
              <input
                type="date"
                className="bg-white p-3 rounded-md shadow"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            {/* Course Selection */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Preferred Course</label>
              <select
                className="p-3 rounded-md shadow bg-white appearance-none"
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <option>Select your preferred course ......</option>
                <option>Cybersecurity</option>
                <option>Data Science</option>
                <option>Cloud Computing</option>
                <option>AI/ML</option>
              </select>
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Address</label>
              <input
                type="text"
                placeholder="Enter address ......"
                className="bg-white p-3 rounded-md shadow"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Country</label>
              <select
                className="bg-white p-3 rounded-md shadow appearance-none"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option>Select your Country ......</option>
                <option>India</option>
                <option>USA</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>

            {/* State */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">State</label>
              <select
                className="bg-white p-3 rounded-md shadow appearance-none"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option>Select your State ......</option>
                <option>West Bengal</option>
                <option>Karnataka</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
              </select>
            </div>

            {/* File Upload */}
            <div className="flex flex-col">
              <label htmlFor="file-upload" className="mb-1 font-semibold">Upload Documents</label>
              <div className="relative">
                <input
                  type="file"
                  name="file"
                  className="bg-white p-3 rounded-md shadow w-full opacity-0 absolute top-0 left-0"
                  id="file-upload"
                  onChange={handleChange}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer bg-gray-200 p-3 rounded-md shadow w-full flex items-center justify-center text-gray-500"
                >
                  {formData.file ? formData.file.name : "Choose a file"}
                </label>
              </div>
            </div>

            {/* Identity Radio */}
            <div className="flex flex-col md:col-span-3">
              <label className="block font-semibold mb-1">Who are you?</label>
              <div className="space-x-4">
                <label>
                  <input type="radio" name="identity" className="mr-1" /> Individual
                </label>
                <label>
                  <input type="radio" name="identity" className="mr-1" /> Student/Professional
                </label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex justify-end space-x-4">
            <button
              onClick={handleSaveAndPreview}
              className="bg-white px-6 py-2 rounded-full shadow-xl"
            >
              Save and Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
