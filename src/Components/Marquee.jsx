/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React from "react";

function Marquee({ imagesurls, direction }) {
  // Animation start and end positions depend on direction
  const fromX = direction === "left" ? "0%" : "-100%";
  const toX = direction === "left" ? "-100%" : "0%";

  // Duration for one full scroll
  const duration = 50;

  return (
    <div className="flex w-full overflow-hidden relative">
      {/* First strip */}
      <motion.div
        initial={{ x: fromX }}
        animate={{ x: toX }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
        className="flex flex-shrink-0 gap-20 md:gap-40 py-6 md:py-10"
        style={{ width: "max-content" }}
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} alt={`marquee-${index}`} />
        ))}
      </motion.div>

      {/* Second strip, offset in animation */}
      <motion.div
        initial={{ x: direction === "left" ? "100%" : "0%" }}
        animate={{ x: direction === "left" ? "0%" : "100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
        className="flex flex-shrink-0 gap-40 py-10 pr-96"
        style={{ width: "max-content", position: "absolute", top: 0, left: 0 }}
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} alt={`marquee-duplicate-${index}`} />
        ))}
      </motion.div>
      
    </div>
  );
}

export default Marquee;
