import React from "react";
import Slider from "react-slick";
import { Star, ArrowRight, ArrowLeft } from "lucide-react"; 

const reviews = [
  {
    id: 1,
    name: "Aditi Sharma",
    review:
      "Absolutely loved the jewelry! The quality is top-notch and delivery was super quick. Will definitely shop!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Neha Verma",
    review:
      "Elegant designs with premium finishing. I got so many compliments for my necklace. Thank you!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Riya Kapoor",
    review:
      "One of the best online jewelry stores I’ve come across. Customer service was very helpful.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Priya Singh",
    review:
      "Beautiful craftsmanship. The earrings I bought are just perfect for parties and daily wear.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -bottom-12 left-1/2 mb-6 transform -translate-x-4 text-secondary p-2 cursor-pointer hover:bg-primary hover:rounded-full"
  >
    <ArrowLeft size={20} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -bottom-12 left-1/2 mb-6 transform translate-x-4 text-secondary p-2 cursor-pointer hover:bg-primary hover:rounded-full"
  >
    <ArrowRight size={20} />
  </button>
);

const HappyCustomer = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative py-12 px-6 md:px-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-primary opacity-4 -z-10 "></div>

      <h2 className="text-3xl font-bold text-center text-secondary mb-8">
        Happy Clients
      </h2>

      <Slider {...settings} className="py-4">
        {reviews.map((client) => (
          <div key={client.id} className="px-2">
            <div className="bg-white text-secondary mb-6 shadow-md p-6 flex flex-col items-center justify-center rounded-sm">
              <img
                src={client.image}
                alt={client.name}
                className="w-16 h-16 object-cover mb-3 rounded-full border-2 border-primary"
              />
              <div className="flex gap-1 mb-2">
                {Array(client.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={18} />
                  ))}
              </div>
              <p className="text-sm mb-4 text-center">"{client.review}"</p>
              <h4 className="font-semibold text-primary">- {client.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HappyCustomer;
