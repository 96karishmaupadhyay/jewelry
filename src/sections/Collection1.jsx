import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import { ArrowRight } from "lucide-react";

// Import slick-carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const collections = [
  {
    id: 1,
    title: "Diamond Elegance",
    description: "Shine bright with our diamond collection.",
    image:
      "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/LGRG0538_xbupoc.mp4",
  },
  {
    id: 2,
    title: "Gold Classics",
    description: "Timeless gold pieces for every occasion.",
    image:
      "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/file_rqihyt.mp4",
  },
  {
    id: 3,
    title: "Pearl Grace",
    description: "Elegant pearls for a graceful look.",
    image:
      "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/wreathbracelet01_smrjn4.mp4",
  },
  {
    id: 4,
    title: "Modern Silver",
    description: "Sleek and modern silver jewelry.",
    image:
      "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_3645_zvgvlu.mp4",
  },
];

const Collection1 = () => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (idx) => setHovered(idx);
  const handleMouseLeave = () => setHovered(null);

  const getWidth = (idx) => {
    if (hovered !== null) return hovered === idx ? "40%" : "20%";
    return active === idx ? "40%" : "20%";
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <ul
        style={{
          margin: "0px",
          padding: "0",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: () => (
      <div
        style={{
          width: 12,
          height: 12,
          transform: "rotate(45deg)",
          background: "var(--color-primary)",
          margin: "0 auto",
          cursor: "pointer",
        }}
      />
    ),
  };

  return (
    <div style={{ width: "100%", padding: "40px 20px" }}>
      <div className="flex items-center justify-center mb-4">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center"
          style={{ fontFamily: "Qwitcher Grypen, cursive" }}
        >
          OUR RECENT COLLECTIONS
        </h2>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex gap-2 px-8" style={{ height: 400 }}>
        {collections.map((col, idx) => (
          <motion.div
            key={col.id}
            style={{
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              height: "100%",
              transition: "width 0.5s cubic-bezier(.77,0,.18,1)",
              boxShadow:
                active === idx || hovered === idx
                  ? "0 8px 32px rgba(0,0,0,0.15)"
                  : "0 2px 8px rgba(0,0,0,0.07)",
            }}
            animate={{ width: getWidth(idx) }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActive(idx)}
          >
            <video
              src={col.image}
              alt={col.title}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter:
                  hovered === idx || active === idx
                    ? "brightness(1)"
                    : "brightness(0.5)",
                transition: "filter 0.3s",
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px",
               
                color: "#fff",
                minHeight: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <motion.h2
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: 1,
                  lineHeight: 1.2,
                }}
                animate={{
                  y: hovered === idx || active === idx ? 0 : 10,
                  opacity: hovered === idx || active === idx ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                {col.title}
              </motion.h2>
              <AnimatePresence>
                {(hovered === idx || active === idx) && (
                  <motion.p
                    key="desc"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    style={{ marginTop: 8, fontSize: 14 }}
                  >
                    {col.description}
                  </motion.p>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {(hovered === idx || active === idx) && (
                  <motion.button
                    key="btn"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="mt-3 py-2 flex items-center gap-2 justify-center bg-[var(--color-secondary)] text-white font-semibold text-sm cursor-pointer text-center shadow-md hover:shadow-lg"
                  >
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                    To Collection
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile slider */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {collections.map((col) => (
            <div key={col.id} style={{ padding: "0 10px" }}>
              <video
                src={col.image}
                alt={col.title}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: 250,
                  objectFit: "cover",
                  borderRadius: 16,
                }}
              />
              <div style={{ padding: 12 }}>
                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--color-secondary)",
                  }}
                >
                  {col.title}
                </h2>
                <p style={{ fontSize: 14, color: "var(--color-secondary)" }}>
                  {col.description}
                </p>
                <button
                  style={{
                    marginTop: 8,
                    padding: "8px 16px",
                    border: "none",
                    background: "var(--color-secondary)",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                    height:"40px"
                  }}
                >
                  To Collection
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collection1;
