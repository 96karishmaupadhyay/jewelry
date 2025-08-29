import React from "react";
import banner1 from "../assets/3.png";
import banner2 from "../assets/smallbanner4.png";
import banner3 from "../assets/800_900_1.png";

const images = [
  { src: banner1, alt: "Jewelry Banner 1" },
  { src: banner2, alt: "Jewelry Banner 2" },
  { src: banner3, alt: "Jewelry Banner 3" },
];

const BannerGrid2 = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 px-10 w-full  mx-auto">
    {/* Left: Big Image */}
    <img
      src={images[0].src}
      alt={images[0].alt}
      className="w-full h-[500px] object-cover rounded-lg shadow-md 
                 transform transition duration-500 hover:scale-105 hover:shadow-xl"
    />

    {/* Right: stacked two images */}
    <div className="flex flex-col gap-5">
      <img
        src={images[1].src}
        alt={images[1].alt}
        className="w-full h-[240px] object-cover rounded-lg shadow-md 
                   transform transition duration-500 hover:scale-105 hover:shadow-xl"
      />
      <img
        src={images[2].src}
        alt={images[2].alt}
        className="w-full h-[240px] object-cover rounded-lg shadow-md 
                   transform transition duration-500 hover:scale-105 hover:shadow-xl"
      />
    </div>
  </div>
);

export default BannerGrid2;
