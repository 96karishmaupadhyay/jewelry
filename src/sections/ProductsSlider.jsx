import React from "react";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductsSlider = ({ title, products, type }) => {
  let sliderRef = React.useRef(null);

  // Custom arrow functions (placed outside slick default arrows)
  const handlePrev = () => sliderRef.slickPrev();
  const handleNext = () => sliderRef.slickNext();

  const settings = {
    dots: false,
    arrows: false, // hide default arrows
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className=" p-8 bg-yellow-50">
      {/* Header (title + arrows on right) */}
      <div className="flex items-center justify-between mb-3 ">
        {title && <h2 className="text-2xl font-bold text-secondary text-center mb-4">{title.toUpperCase()}</h2>}
        <div className="flex gap-2 ">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-primary hover:bg-white hover:border-secondary hover:border-[0.5px] text-secondary hover:text-primary"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-primary hover:bg-white hover:border-secondary hover:border-[0.5px]"
          >
            <ChevronRight className="w-5 h-5 text-secondary hover:text-primary" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Slider ref={(slider) => (sliderRef = slider)} {...settings} >
        {products?.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
