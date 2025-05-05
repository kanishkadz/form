import React from "react";

const CybersecurityCourse = () => {
  return (
    <div className="bg-[#f7941d] min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-5xl overflow-hidden border-[8px] border-[#f7941d]">
        {/* Left Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-black mb-4">Cybersecurity</h2>
          <p className="text-black text-base leading-relaxed mb-6">
            A cybersecurity course provides foundational knowledge and practical
            skills to protect computer systems, networks, and data from digital
            threats. It covers topics like network security, ethical hacking,
            cryptography, risk management, and cybersecurity laws, preparing
            learners for roles in securing IT infrastructure and responding to
            cyber incidents.
          </p>
          <button className="bg-[#2f1d8c] hover:bg-[#1e1363] text-white px-6 py-3 rounded-full font-semibold transition">
            Enroll me in
          </button>
        </div>

        {/* Right Section - Illustration */}
        <div className="md:w-1/2 bg-white flex items-center justify-center p-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8074/8074914.png" // Placeholder: Use your own image or asset
            alt="Illustration"
            className="max-h-60"
          />
        </div>
      </div>
    </div>
  );
};

export default CybersecurityCourse;
