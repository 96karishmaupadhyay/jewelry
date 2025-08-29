// CustomerReview.jsx
import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    user: "Rahul Sharma",
    rating: 5,
    title: "Excellent Product!",
    description:
      "The quality is just amazing. Totally worth the money. Packaging was also very good.",
    date: "2 days ago",
    verified: true,
    helpful: 32,
  },
  {
    id: 2,
    user: "Priya Verma",
    rating: 4,
    title: "Value for Money",
    description:
      "Nice product at this price range. Performance is smooth but battery could have been better.",
    date: "5 days ago",
    verified: true,
    helpful: 18,
  },
  {
    id: 3,
    user: "Amit Singh",
    rating: 3,
    title: "Average Experience",
    description:
      "Product is okay, not as good as I expected. Build quality could improve.",
    date: "1 week ago",
    verified: false,
    helpful: 7,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-green-600 fill-green-600" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

const CustomerReview = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

      {reviews.map((review) => (
        <div
          key={review.id}
          className="border-b border-gray-200 py-4 flex flex-col gap-2"
        >
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center px-2 py-1 bg-green-600 text-white rounded w-fit text-sm font-semibold">
              {review.rating} ★
            </div>
            <p className="font-medium">{review.title}</p>
          </div>

          {/* Description */}
          <p className="text-gray-700">{review.description}</p>

          {/* User & Date */}
          <div className="text-sm text-gray-500">
            {review.user} | {review.date}{" "}
            {review.verified && (
              <span className="text-green-600 font-medium ml-2">
                ✔ Verified Purchase
              </span>
            )}
          </div>

          {/* Helpful */}
          <div className="text-xs text-gray-500">
            {review.helpful} people found this helpful
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerReview;
