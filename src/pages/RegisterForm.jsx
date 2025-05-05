import React from "react";

export default function RegisterForm() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col items-center py-10"
            style={{ backgroundImage: "url('/BG.jpg')" }}
        >
            <div className="w-full max-w-6xl bg-white border-4 border-gray-200 shadow-lg">
                <div className="bg-purple-800 text-white py-4 px-6 text-center text-xl font-bold">
                    REGISTER YOURSELF
                </div>
                <div className="bg-orange-400 p-8">
                    <h2 className="text-2xl font-bold mb-6">Personal Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input type="text" placeholder="Enter your full name ......" className="bg-white p-3 rounded-md shadow" />
                        <input type="number" placeholder="Enter your phone number ......" className="bg-white p-3 rounded-md shadow" />

                        <input type="email" placeholder="Enter your email ......" className="bg-white p-3 rounded-md shadow" />
                        <input type="date" placeholder="DD - MM - YYYY" className="bg-white p-3 rounded-md shadow" />
                        <select className="p-3 rounded-md shadow bg-white">
                            <option>Select your preferred course ......</option>
                            <option>Select your preferred course ......</option>
                            <option>Select your preferred course ......</option>
                            <option>Select your preferred course ......</option>
                            <option>Select your preferred course ......</option>
                        </select>

                        <input type="text" placeholder="Enter your address ......" className="bg-white p-3 rounded-md shadow" />
                        <select className="bg-white p-3 rounded-md shadow appearance-none">
                            <option>Select your State ......</option>
                            <option>Select your State ......</option>
                            <option>Select your State ......</option>
                            <option>Select your State ......</option>
                            <option>Select your State ......</option>
                        </select>
                        <select className="bg-white p-3 rounded-md shadow appearance-none">
                            <option>Select your Country ......</option>
                        </select>


                        <div className="relative">
                            <input
                                type="file"
                                className="bg-white p-3 rounded-md shadow w-full opacity-0 absolute top-0 left-0"
                                id="file-upload"
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
                            <label className="block font-semibold mb-1">Who are you ?</label>
                            <div className="space-x-4">
                                <label><input type="radio" name="identity" className="mr-1" /> Individual</label>
                                <label><input type="radio" name="identity" className="mr-1" /> Student/Professional</label>
                            </div>
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Payment</label>
                            <label><input type="radio" name="payment" className="mr-1" /> Proceed to Payment</label>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-end space-x-4">
                        <button className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow">Payment</button>
                        <button className="bg-white border border-black px-6 py-2 rounded-full shadow">Save and Preview</button>
                        <button className="bg-purple-800 text-white px-6 py-2 rounded-full shadow">Save and Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
