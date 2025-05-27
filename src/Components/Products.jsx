import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
  ];

  // Images to replace the colored blocks
  const images = [
    "https://w0.peakpx.com/wallpaper/390/568/HD-wallpaper-artificial-intelligence-background-vectors-stock-psd-vision.jpg",
    "https://proedu.com/cdn/shop/articles/The_Role_of_AI_in_Modern_Photography.jpg?v=1732303913&width=2048",
    "https://media.istockphoto.com/id/1166272744/photo/futuristic-digital-technology-screen-on-the-eye.jpg?s=612x612&w=0&k=20&c=EMglh3Qt9oBLneLtfV3VYLm6QYUlAlu4Ac7xzUpOrOk=",
    "https://wallpapers.com/images/hd/ai-pictures-1920-x-1080-ewyrwjmzhvahlvwp.jpg",
    "https://images5.alphacoders.com/134/1345249.png",
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 16);
  };

  return (
    <div className="relative mt-2 md:mt-20">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none hidden  lg:block">
        <motion.div
          initial={{ y: `${pos}rem`, x: "-50%" }}
          animate={{ y: `${pos}rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute left-[44%] w-[20rem] h-[16rem]  overflow-hidden"
          style={{ transform: "translateX(-50%)" }}
        >
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-cover absolute  "
              animate={{ y: `calc(${-pos}rem + ${i} * 16rem)` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              style={{ top: 0 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
