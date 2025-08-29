// CategorySection.jsx
import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Necklaces",
    image:
      "https://i.etsystatic.com/5939762/r/il/00c8f2/1806126239/il_340x270.1806126239_bosq.jpg",
  },
  {
    name: "Earrings",
    image:
      "https://i.etsystatic.com/6374506/c/1060/841/0/293/il/6bdd35/1724278139/il_340x270.1724278139_m1x7.jpg",
  },
  {
    name: "Rings",
    image:
      "https://i.etsystatic.com/61015224/c/523/523/227/128/il/d1a5c9/7052247276/il_600x600.7052247276_e4bv.jpg",
  },
  {
    name: "Bracelets",
    image:
      "https://i.etsystatic.com/33445905/r/il/4b337a/5194390132/il_600x600.5194390132_86du.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const CategorySection = () => (
 
  <section className="pb-8 pt-8  px-6 sm:px-6   mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-secondary">
      Shop by Category
    </h2>
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map((cat) => (
        <motion.div
          key={cat.name}
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="relative flex flex-col items-center group cursor-pointer pt-4"
        >
          {/* Image container */}
          <div className="w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 flex items-center justify-center relative">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-32 sm:w-44 md:w-48 h-32 sm:h-44 md:h-48 object-cover rounded-2xl transform rotate-45 shadow-md transition-transform duration-500 group-hover:rotate-0"
            />
            <div className="absolute inset-0 w-32 sm:w-44  md:w-48 h-32 sm:h-44 md:h-48 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-60   transition-all duration-500 transform rotate-0 group-hover:rotate-12"></div>
          </div>

          {/* Text */}
          <div className="relative w-full flex flex-col items-center mt-4">
            <span className="text-gray-800 text-base sm:text-lg font-semibold">{cat.name}</span>
            <span
              className="block h-0.5 bg-secondary rounded-full w-0 group-hover:w-full transition-all duration-300 mt-1"
              aria-hidden="true"
            ></span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default CategorySection;
