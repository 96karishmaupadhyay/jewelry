import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ring from "../assets/ring10.jpeg";
import necklace from "../assets/necklace10.jpeg";
import earring from "../assets/earring1.jpeg";
import bracelet from "../assets/bracelet4.jpeg";

const images = [necklace, earring, bracelet, ring,necklace,bracelet];

export default function ProductDetailCarousel() {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  // Dummy product details
  const product = {
    id: 1,
    name: "Kaff Chimney",
    price: 10000,
    image: activeImage,
  };

  const handleAddToCart = () => {
    // ✅ Save product to localStorage (cart simulation)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("cart", JSON.stringify([...cart, product]));

    setMessage("✅ Added to Cart!");

    // remove message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className=" p-4  ">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start  ">
        {/* Left Thumbnails */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible ">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Thumbnail ${i}`}
              className={`w-16 h-16 object-cover rounded-sm border-[0.5px] ${
                activeImage === src ? "border-secondary " : "border-transparent"
              } hover:border-secondary cursor-pointer transition`}
              onMouseEnter={() => setActiveImage(src)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full md:w-full md:h-[420px] flex items-center justify-center  overflow-hidden rounded-sm">
          <img
            src={activeImage}
            alt="Main product"
            className="w-full h-full object-cover rounded-sm hover:transform hover:scale-105 cursor-pointer"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleAddToCart}
          className="bg-first text-white bg-primary px-6 py-2 rounded-sm hover:bg-secondary transition w-full font-semibold outline-0"
        >
          Add to Cart
        </button>
        <button
          className="bg-secondary text-white px-6 py-2 rounded-sm hover:bg-primary transition w-full font-semibold outline-0"
          onClick={() => navigate("/product-checkout")}
        >
          Buy Now
        </button>
      </div>

      {/* ✅ Success Message (fixed position at bottom) */}
      {message && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 px-4 py-2 rounded shadow">
          {message}
        </div>
      )}
    </div>
  );
}



