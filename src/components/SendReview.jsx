import React, { useState } from "react";
import ring from "../assets/800_900_1.png"; // ✅ replace with your jewelry image

const SendReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-lg   grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-1 border-secondary">
      {/* Left Side - Image */}
      <div className="flex justify-center flex-1">
        <img
          src={ring}
          alt="Jewelry"
          className="w-full h-full object-cover rounded-l-sm   shadow-md"
        />
      </div>

      {/* Right Side - Review Form */}
      <div className="text-center md:text-left  h-full  pt-4 pr-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-4">
          Leave a Review 
        </h2>

        {/* Star Rating */}
        <div className="flex justify-center md:justify-start space-x-2 mb-5 ">
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <span
                key={index}
                className={`text-3xl cursor-pointer transition-colors ${
                  currentRating <= (hover || rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(currentRating)}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(rating)}
              >
                ★
              </span>
            );
          })}
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4  " >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-priamary   outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-primary  outline-none transition"
          />
          <textarea
            placeholder="Write your review here..."
            className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-primary  outline-none transition resize-none min-h-[120px]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-secondary text-white font-semibold py-3 rounded-sm shadow-md hover:scale-105 transition-transform"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendReview;
