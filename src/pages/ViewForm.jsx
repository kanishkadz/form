import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ViewForm() {
  const location = useLocation();
  const formData = location.state || {};

  const [paymentSelected, setPaymentSelected] = useState(false);

  const handlePaymentChange = (e) => {
    setPaymentSelected(e.target.checked);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center py-10" style={{ backgroundImage: "url('/BG.jpg')" }}>
      <div className="absolute inset-0 bg-black/30 z-0 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-6xl bg-white border-4 border-gray-200 shadow-lg">
        <div className="bg-[#27187E] text-white py-4 px-6 text-center text-4xl font-extrabold">
          FORM PREVIEW
        </div>
        <div className="border-[#D4D5D8] border-3"></div>
        <div className="bg-[#FEA82F] p-8">
          <h2 className="text-2xl font-bold mb-6">Personal Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Enter your full name ......"
              className="bg-white p-3 rounded-md shadow"
              value={formData.name || ''}
              disabled
            />
            <input
              type="number"
              placeholder="Enter your phone number ......"
              className="bg-white p-3 rounded-md shadow"
              value={formData.phone || ''}
              disabled
            />
            <input
              type="email"
              placeholder="Enter your email ......"
              className="bg-white p-3 rounded-md shadow"
              value={formData.email || ''}
              disabled
            />
            <input
              type="date"
              className="bg-white p-3 rounded-md shadow appearance-none"
              value={formData.date || ''}
              disabled
            />
            <select className="p-3 rounded-md shadow bg-white appearance-none" value={formData.course || ''} disabled>
              <option>Select your preferred course ......</option>
              <option>Cybersecurity</option>
              <option>Data Science</option>
              <option>Cloud Computing</option>
              <option>AI/ML</option>
            </select>
            <input
              type="text"
              placeholder="Enter your address ......"
              className="bg-white p-3 rounded-md shadow"
              value={formData.address || ''}
              disabled
            />
            <select className="bg-white p-3 rounded-md shadow appearance-none" value={formData.state || ''} disabled>
              <option>Select your State ......</option>
              <option>West Bengal</option>
              <option>Karnataka</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
            </select>
            <select className="bg-white p-3 rounded-md shadow appearance-none" value={formData.country || ''} disabled>
              <option>Select your Country ......</option>
              <option>India</option>
              <option>USA</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>

            {/* File Upload */}
            <div className="relative">
              <input
                type="file"
                className="bg-white p-3 rounded-md shadow w-full opacity-0 absolute top-0 left-0"
                id="file-upload"
                disabled
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-gray-200 p-3 rounded-md shadow w-full flex items-center justify-center text-gray-500"
              >
                Upload documents
              </label>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Who are you?</label>
              <div className="space-x-4">
                <label>
                  <input type="radio" name="identity" className="mr-1" disabled checked={formData.identity === "Individual"} /> Individual
                </label>
                <label>
                  <input type="radio" name="identity" className="mr-1" disabled checked={formData.identity === "Student/Professional"} /> Student/Professional
                </label>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Payment</label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  className="mr-1"
                  checked={paymentSelected}
                  onChange={handlePaymentChange}
                />{" "}
                Proceed to Payment
              </label>
            </div>
          </div>

          <div className="mt-10 flex justify-end space-x-4">
            <button
              className={`${
                paymentSelected ? "bg-white text-black" : "bg-white text-black opacity-50"
              } px-6 py-2 rounded-full shadow`}
              disabled={!paymentSelected}
            >
              Payment
            </button>
            <button className="bg-[#27187E] text-white px-6 py-2 rounded-full shadow">
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
