import React from "react";

function DoctorCard() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex">
          <div className="w-1/4">
            <img
              src="https://via.placeholder.com/150"
              alt="Doctor"
              className="rounded-full border-4 border-green-500"
            />
          </div>
          <div className="w-3/4 pl-4">
            <h2 className="text-xl font-bold">Dr. Bruce Willis</h2>
            <p className="text-gray-600">Gynecologist at Sangrini Hospital</p>
            <div className="flex items-center space-x-4 mt-2">
              <span>⭐ 4.2</span>
              <span>Followers: 850</span>
              <span>Likes: 18k</span>
              <span>Posts: 250</span>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
              Book an Appointment
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">About Me</h3>
          <p>
            Hello! I am Dr. Bruce Willis, a Gynecologist at Sangrini Hospital.
            I specialize in Women's Health, Skin Care, and Immunity-related
            concerns.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">I Specialize In</h3>
          <div className="flex space-x-4 mt-2">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Women's Health
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Skin Care
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Immunity
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Hair Care
            </span>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Appointment Fee</h3>
          <p>₹699.00</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
