import React from "react";

const FailedPage = () => {
  return (
    <div className="min-h-screen bg-[#f7941d] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white border-[8px] border-[#f7941d] shadow-lg rounded-lg">
        {/* Header */}
        <div className="bg-[#2f1d8c] py-3 text-center">
          <h2 className="text-white font-semibold text-lg uppercase">
            Payment Options
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center bg-[#f7941d] px-6 py-16">
          <div className="w-40 h-40 bg-white rounded-full mb-10"></div>
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
