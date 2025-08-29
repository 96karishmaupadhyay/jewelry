import React from "react";
import { Star, Users, ShieldCheck } from "lucide-react";

const RatingAndTrust = () => {
  // Example data
  const rating = 4.8;
  const totalUsers = 1523;
  const yearsInBusiness = 10;
  const guarantee = "100% Authenticity Guarantee";

  return (
    <section className="bg-pink-50 p-8 px-0 flex flex-wrap md:flex-nowrap items-center justify-around gap-8 shadow-md ">
      
      {/* Rating */}
      <div className="text-center flex flex-col items-center">
        <Star className="text-secondary w-10 h-10 " stroke="currentColor" strokeWidth={0.5} fill="none"/>
        <div className="text-3xl font-semi-bold">{rating}</div>
        <div className="text-gray-500">Average Rating</div>
      </div>

      {/* Customers */}
      <div className="text-center flex flex-col items-center">
        <Users className="text-primary w-10 h-10" stroke="currentColor" strokeWidth={0.5} fill="none"/>
        <div className="text-3xl font-semi-bold">{totalUsers}+</div>
        <div className="text-gray-500">Happy Customers</div>
      </div>

      {/* Years in business */}
      <div className="text-center flex flex-col items-center">
        <ShieldCheck className="text-green-500 w-10 h-10" stroke="currentColor" strokeWidth={0.5} fill="none"/>
        <div className="text-3xl font-semi-bold">{yearsInBusiness}+</div>
        <div className="text-gray-500">Years in Business</div>
      </div>

      
    </section>
  );
};

export default RatingAndTrust;
