import React, { useState } from "react";
import "./Hero.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      flavor: "Cherry",
      title: "Ice Cream",
      desc: "Sweet, creamy cherry delight with a burst of tangy freshness in every scoop. Indulge in creamy, dreamy scoops of ice cream that melt in your mouth, bringing a burst of sweetness and happiness with every delightful bite.",
      colors: ["#c94f4f", "#9D0808"],
      main: "/images/cherryIcecream.png",
      fruits: [
        { src: "/images/cherry1.png", style: { top: "8%", left: "15%", width: "260px", rotate: "-40deg" } },
        { src: "/images/cherry2.png", style: { top: "30%", right: "15%", width: "260px", rotate: "15deg" } },
        { src: "/images/cherry3.png", style: { bottom: "10%", left: "20%", width: "260px", rotate: "-20deg" } },
        { src: "/images/cherry4.png", style: { bottom: "-5%", right: "25%", width: "260px", rotate: "10deg" } },
      ],
    },
    {
      flavor: "Apple",
      title: "Ice Cream",
      desc: "Crisp and refreshing apple flavor infused in smooth creamy goodness. Indulge in creamy, dreamy scoops of ice cream that melt in your mouth, bringing a burst of sweetness and happiness with every delightful bite.",
      colors: ["#B5D37A", "#9CB246"],
      main: "/images/appleIcecream.png",
      fruits: [
        { src: "/images/apple1.png", style: { top: "5%", left: "10%", width: "260px", rotate: "-5deg" } },
        { src: "/images/apple2.png", style: { top: "20%", right: "12%", width: "260px", rotate: "10deg" } },
        { src: "/images/apple3.png", style: { bottom: "2%", left: "22%", width: "260px", rotate: "-12deg" } },
        { src: "/images/apple4.png", style: { bottom: "10%", right: "25%", width: "260px", rotate: "8deg" } },
      ],
    },
    {
      flavor: "Chocolate",
      title: "Ice Cream",
      desc: "Rich and indulgent chocolate ice cream that melts hearts and spoons alike. Indulge in creamy, dreamy scoops of ice cream that melt in your mouth, bringing a burst of sweetness and happiness with every delightful bite.",
      colors: ["#996F5B", "#722D1D"],
      main: "/images/chocolateIcecream.png",
      fruits: [
        { src: "/images/choco1.png", style: { top: "10%", left: "19%", width: "260px", rotate: "-10deg" } },
        { src: "/images/choco2.png", style: { top: "25%", right: "15%", width: "260px", rotate: "5deg" } },
        { src: "/images/choco3.png", style: { bottom: "10%", left: "25%", width: "260px", rotate: "-15deg" } },
        { src: "/images/choco4.png", style: { bottom: "12%", right: "20%", width: "260px", rotate: "10deg" } },
      ],
    },
    {
      flavor: "Peach",
      title: "Ice Cream",
      desc: "Delicate peach flavor blended with smooth cream for a summer-perfect scoop. Indulge in creamy, dreamy scoops of ice cream that melt in your mouth, bringing a burst of sweetness and happiness with every delightful bite.",
      colors: ["#ffdeb3", "#DB893F"],
      main: "/images/peachIcecream.png",
      fruits: [
        { src: "/images/peach1.png", style: { top: "8%", left: "8%", width: "360px", rotate: "-8deg" } },
        { src: "/images/peach2.png", style: { top: "28%", right: "9%", width: "360px", rotate: "10deg" } },
        { src: "/images/peach3.png", style: { bottom: "1%", left: "20%", width: "360px", rotate: "-12deg" } },
        { src: "/images/peach4.png", style: { bottom: "-5%", right: "22%", width: "360px", rotate: "8deg" } },
      ],
    },
    {
      flavor: "Blueberry",
      title: "Ice Cream",
      desc: "A luscious mix of sweet cream and tangy blueberries bursting with flavor. Indulge in creamy, dreamy scoops of ice cream that melt in your mouth, bringing a burst of sweetness and happiness with every delightful bite.",
      colors: ["#b26cf2", "#9b4fe0"],
      main: "/images/blueberryIcecream.png",
      fruits: [
        { src: "/images/blueberry1.png", style: { top: "10%", left: "12%", width: "260px", rotate: "-5deg" } },
        { src: "/images/blueberry2.png", style: { top: "25%", right: "15%", width: "260px", rotate: "80deg" } },
        { src: "/images/blueberry3.png", style: { bottom: "8%", left: "25%", width: "260px", rotate: "-10deg" } },
        { src: "/images/blueberry4.png", style: { bottom: "10%", right: "20%", width: "260px", rotate: "6deg" } },
      ],
    },
    {
      flavor: "Strawberry",
      title: "Ice Cream",
      desc: "Classic strawberry sweetness swirled into creamy perfection. Indulge in creamy, dreamy scoops of ice cream that melt in your mouth, bringing a burst of sweetness and happiness with every delightful bite.",
      colors: ["#ff9ebc", "#d7265f"],
      main: "/images/strawberryIcecream.png",
      fruits: [
        { src: "/images/strawberry1.png", style: { top: "8%", left: "15%", width: "260px", rotate: "-10deg" } },
        { src: "/images/strawberry2.png", style: { top: "28%", right: "18%", width: "260px", rotate: "12deg" } },
        { src: "/images/strawberry3.png", style: { bottom: "14%", left: "22%", width: "200px", rotate: "-8deg" } },
        { src: "/images/strawberry4.png", style: { bottom: "12%", right: "15%", width: "260px", rotate: "10deg" } },
      ],
    },
    {
      flavor: "Pistachio",
      title: "Ice Cream",
      desc: "Nutty and creamy pistachio ice cream that melts in your mouth with every bite.",
      colors: ["#d5e5c0", "#a3b97f"],
      main: "/images/pistachioIcecream.png",
      fruits: [
        { src: "/images/pistachio1.png", style: { top: "10%", left: "12%", width: "260px", rotate: "-10deg" } },
        { src: "/images/pistachio2.png", style: { top: "25%", right: "15%", width: "260px", rotate: "10deg" } },
        { src: "/images/pistachio3.png", style: { bottom: "12%", left: "20%", width: "260px", rotate: "-8deg" } },
        { src: "/images/pistachio4.png", style: { bottom: "10%", right: "18%", width: "260px", rotate: "6deg" } },
      ],
    },
    {
      flavor: "Hazelnut",
      title: "Ice Cream",
      desc: "Smooth and rich hazelnut ice cream that delights your taste buds with every scoop.",
      colors: ["#d9c3a1", "#a67c52"],
      main: "/images/hazelnutIcecream.png",
      fruits: [
        { src: "/images/hazelnut1.png", style: { top: "10%", left: "15%", width: "260px", rotate: "-10deg" } },
        { src: "/images/hazelnut2.png", style: { top: "25%", right: "15%", width: "260px", rotate: "10deg" } },
        { src: "/images/hazelnut3.png", style: { bottom: "12%", left: "18%", width: "260px", rotate: "-8deg" } },
        { src: "/images/hazelnut4.png", style: { bottom: "10%", right: "18%", width: "260px", rotate: "6deg" } },
      ],
    },
    {
      flavor: "Lychee Rose",
      title: "Ice Cream",
      desc: "Exquisite blend of lychee and rose flavors creating a sweet, floral delight in every scoop.",
      colors: ["#ffe4e1", "#f9c0c0"],
      main: "/images/lycheeroseIcecream.png",
      fruits: [
        { src: "/images/lychee1.png", style: { top: "10%", left: "12%", width: "260px", rotate: "-10deg" } },
        { src: "/images/lychee2.png", style: { top: "25%", right: "15%", width: "260px", rotate: "10deg" } },
        { src: "/images/rose1.png", style: { bottom: "12%", left: "18%", width: "260px", rotate: "-8deg" } },
        { src: "/images/rose2.png", style: { bottom: "10%", right: "18%", width: "260px", rotate: "6deg" } },
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextSlide = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[index];
  const [c1, c2] = current.colors;

  const imageVariants = {
    hidden: { opacity: 0, rotate: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      rotate: 100,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      rotate: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <div
      className="hero"
      style={{
        background: `radial-gradient(circle,
          ${c1} 0%,
          ${c1} 20%,
          ${c2} 20%,
          ${c2} 40%,
          ${c1} 40%,
          ${c1} 60%,
          ${c2} 60%,
          ${c2} 85%,
          ${c1} 85%,
          ${c1} 100%
        )`,
      }}
    >
      <AnimatePresence mode="wait" custom={index}>
        <motion.div
          key={current.flavor}
          className="text-curve"
          variants={{
            enter: (direction) => ({
              y: direction === "next" ? 50 : -50,
              opacity: 0,
            }),
            center: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            },
            exit: (direction) => ({
              y: direction === "next" ? -50 : 50,
              opacity: 0,
              transition: { duration: 0.6, ease: "easeIn" },
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          custom={current.direction}
        >
          <h2 className="flavor">{current.flavor}</h2>
          <h1 className="title">{current.title}</h1>
          <p className="desc">{current.desc}</p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.img
          key={current.main}
          src={current.main}
          alt={current.flavor}
          className="icecream"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
        {current.fruits.map((fruit) => (
          <motion.img
            key={fruit.src}
            src={fruit.src}
            alt=""
            className="fruit"
            style={fruit.style}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        ))}
      </AnimatePresence>

      <div className="nav-arrows">
        <FiChevronLeft className="arrow left" onClick={prevSlide} />
        <FiChevronRight className="arrow right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Hero;
