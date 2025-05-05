import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center p-8"
      style={{ backgroundImage: "url('/BG.jpg')" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-0"></div>
      <div className="relative z-10 bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-5xl overflow-hidden border-[8px] border-[#FEA82F]">
        <div className="md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-black mb-4">Lorem ipsum</h2>
          <p className="text-black text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            illo nesciunt blanditiis! Eligendi, rem. Minima natus totam
            aspernatur perferendis. Totam, veritatis nostrum! Autem, eum. Ipsum
            corporis cumque molestiae id vero, consequuntur voluptates
            doloribus tenetur aut? Deleniti provident, quasi corrupti expedita,
            labore id, similique doloribus distinctio pariatur nisi rem totam
            optio.
          </p>
          <Link to="/register">
            <button className="bg-[#27187E] hover:bg-[#131325] text-white px-6 py-3 rounded-full font-semibold transition">
              ENROLL ME IN
            </button>
          </Link>
        </div>

        <div className="md:w-1/2 bg-white flex items-center justify-center p-8">
          <img
            src="/Illustration.png"
            alt="Illustration"
            className="max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
