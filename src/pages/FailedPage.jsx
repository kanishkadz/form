import React from "react";

const FailedPage = () => {
  return (
    <div
      className="min-h-screen bg-[#FEA82F] flex items-center justify-center p-4 relative"
      style={{ backgroundImage: "url('/BG.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-0"></div>
      <div className="relative z-10 w-full max-w-4xl bg-white border-[8px] border-[#D4D5D8] shadow-lg rounded-lg">
        <div className="bg-[#27187E] text-white py-4 px-6 text-center text-4xl font-extrabold">
          PAYMENT OPTIONS
        </div>
        <div className="border-[#D4D5D8] border-3"></div>
        <div className="flex flex-col items-center justify-center bg-[#FEA82F] px-6 py-16">
          <div className="w-60 h-60 bg-white rounded-full mb-10 overflow-hidden">
            <img src="/Failed.png" alt="" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Oops! Payment Failed
          </h1>
          <p className="text-black text-lg text-center">
            Payment Failed! But your response is saved. <br />
            Please try again later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FailedPage;
