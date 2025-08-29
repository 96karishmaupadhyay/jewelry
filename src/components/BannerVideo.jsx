import React from "react";
import { motion } from "framer-motion";
import video from "../assets/video.mp4";

const headingText = "Discover Exquisite Jewelry";

const BannerVideo = () => {
  // Split heading into letters
  const letters = headingText.split("");

  // Container variants for stagger
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Letter variants
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="banner-video relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6 md:px-16">
        {/* Animated Heading */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-bold text-white mb-4 flex flex-wrap justify-center"
        >
          {letters.map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-white text-lg md:text-2xl max-w-2xl"
        >
          Handcrafted rings, necklaces, and bracelets to elevate your style.
          Luxury and elegance in every piece.
        </motion.p>
      </div>
    </div>
  );
};

export default BannerVideo;
