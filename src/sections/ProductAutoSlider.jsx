import React, { useState } from "react";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";

const ProductAutoSlider = ({ title, products }) => {

  const sliderRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4, // ✅ 4 cards for large screens
  slidesToScroll: 1,
  centerMode: true, 
  centerPadding: "0px",
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  beforeChange: (_, next) => setActiveIndex(next),
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } }, // Medium screens
    { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablets
    { breakpoint: 640, settings: { slidesToShow: 1 } },  // Mobile
  ],
};


  return (
    <div className=" p-8 bg-pink-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-2">
        {title && (
          <h2
            className="text-2xl font-bold text-secondary"
            
          >
            {title.toUpperCase()}
          </h2>
        )}
      </div>

      {/* Slider */}
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings} >
        {products?.map((product, index) => (
          <div key={product.id} className="px-2">
            <div
              className={`transition-all duration-500 ${
                index === activeIndex
                  ? "scale-100 opacity-100" // Active product style
                  : "scale-90 opacity-90 hover:opacity-100" //  Inactive product style
              }`}
            >
              <ProductCard {...product} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductAutoSlider;
