import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import earring from "../assets/3.png";
import ring from "../assets/4.png";
import bracelet from "../assets/1.png";

const banners = [
  {
    id: 1,
    image: bracelet,
    title: "Elegant Jewelry",
    subtitle: "Handcrafted pieces for your timeless beauty"
  },
  {
    id: 2,
    image: earring,
    title: "Luxury Collection",
    subtitle: "Exclusive designs for special occasions"
  },
  {
    id: 3,
    image: ring,
    title: "Shine Everyday",
    subtitle: "Minimal jewelry for your daily elegance"
  }
];

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  };

  return (
    <div className="relative w-full h-[80vh]">
      {/* 👇 Inline styling for dots */}
      <style>
        {`
          .slick-dots {
            bottom: 20px;
          }
          .slick-dots li {
            margin: 0 6px;
          }
          .slick-dots li button:before {
            font-size: 12px;
            color: #ffffff;
            opacity: 0.5;
          }
          .slick-dots li.slick-active button:before {
            color: #481F31; 
            opacity: 1;
            font-size: 14px;
          }
        `}
      </style>

      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative">
            {/* Background Image */}
            <div
              className="w-full h-[80vh] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundRepeat: "no-repeat"
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {banner.title}
              </h2>
              <p className="text-lg md:text-2xl mb-6">{banner.subtitle}</p>
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-primary transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
