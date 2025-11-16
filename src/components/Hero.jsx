import React, { useState } from "react";
import "./Hero.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import cherryIcecream from "../images/cherryIcecream.png";
import cherry1 from "../images/cherry1.png";
import cherry2 from "../images/cherry2.png";
import cherry3 from "../images/cherry3.png";
import cherry4 from "../images/cherry4.png";

import appleIcecream from "../images/appleIcecream.png";
import apple1 from "../images/apple1.png";
import apple2 from "../images/apple2.png";
import apple3 from "../images/apple3.png";
import apple4 from "../images/apple4.png";

import chocolateIcecream from "../images/chocolateIcecream.png";
import choco1 from "../images/choco1.png";
import choco2 from "../images/choco2.png";
import choco3 from "../images/choco3.png";
import choco4 from "../images/choco4.png";

import peachIcecream from "../images/peachIcecream.png";
import peach1 from "../images/peach1.png";
import peach2 from "../images/peach2.png";
import peach3 from "../images/peach3.png";
import peach4 from "../images/peach4.png";

import blueberryIcecream from "../images/blueberryIcecream.png";
import blueberry1 from "../images/blueberry1.png";
import blueberry2 from "../images/blueberry2.png";
import blueberry3 from "../images/blueberry3.png";
import blueberry4 from "../images/blueberry4.png";

import strawberryIcecream from "../images/strawberryIcecream.png";
import strawberry1 from "../images/strawberry1.png";
import strawberry2 from "../images/strawberry2.png";
import strawberry3 from "../images/strawberry3.png";
import strawberry4 from "../images/strawberry4.png";

import pistachioIcecream from "../images/pistachioIcecream.png";
import pistachio1 from "../images/pistachio1.png";
import pistachio2 from "../images/pistachio2.png";
import pistachio3 from "../images/pistachio3.png";
import pistachio4 from "../images/pistachio4.png";

import hazelnutIcecream from "../images/hazelnutIcecream.png";
import hazelnut1 from "../images/hazelnut1.png";
import hazelnut2 from "../images/hazelnut2.png";
import hazelnut3 from "../images/hazelnut3.png";
import hazelnut4 from "../images/hazelnut4.png";

import lycheeroseIcecream from "../images/lycheeroseIcecream.png";
import lychee1 from "../images/lychee1.png";
import lychee2 from "../images/lychee2.png";
import rose1 from "../images/rose1.png";
import rose2 from "../images/rose2.png";

const Hero = () => {
  const slides = [
    {
      flavor: "Cherry",
      title: "Ice Cream",
      desc: "Experience the perfect blend of sweet and tangy cherry notes that dance on your taste buds with every creamy scoop.",
      colors: ["#c94f4f", "#9D0808"],
      main: cherryIcecream,
      fruits: [
        {
          src: cherry1,
          style: { top: "8%", left: "15%", width: "260px", rotate: "-40deg" },
        },
        {
          src: cherry2,
          style: { top: "30%", right: "15%", width: "260px", rotate: "15deg" },
        },
        {
          src: cherry3,
          style: {
            bottom: "10%",
            left: "20%",
            width: "260px",
            rotate: "100deg",
          },
        },
        {
          src: cherry4,
          style: {
            bottom: "-5%",
            right: "25%",
            width: "260px",
            rotate: "10deg",
          },
        },
      ],
    },
    {
      flavor: "Apple",
      title: "Ice Cream",
      desc: "A refreshing apple delight that combines crisp fruitiness with smooth, creamy texture for a perfect treat.",
      colors: ["#B5D37A", "#9CB246"],
      main: appleIcecream,
      fruits: [
        {
          src: apple1,
          style: { top: "5%", left: "10%", width: "260px", rotate: "-5deg" },
        },
        {
          src: apple2,
          style: { top: "20%", right: "12%", width: "260px", rotate: "10deg" },
        },
        {
          src: apple3,
          style: {
            bottom: "2%",
            left: "22%",
            width: "260px",
            rotate: "-12deg",
          },
        },
        {
          src: apple4,
          style: {
            bottom: "10%",
            right: "25%",
            width: "260px",
            rotate: "8deg",
          },
        },
      ],
    },
    {
      flavor: "Chocolate",
      title: "Ice Cream",
      desc: "Dive into rich, velvety chocolate ice cream that satisfies your cravings with deep cocoa goodness in every bite.",
      colors: ["#996F5B", "#722D1D"],
      main: chocolateIcecream,
      mainStyle: { width: "560px" },
      fruits: [
        {
          src: choco1,
          style: { top: "10%", left: "19%", width: "260px", rotate: "-10deg" },
        },
        {
          src: choco2,
          style: { top: "25%", right: "15%", width: "260px", rotate: "5deg" },
        },
        {
          src: choco3,
          style: {
            bottom: "10%",
            left: "25%",
            width: "260px",
            rotate: "-15deg",
          },
        },
        {
          src: choco4,
          style: {
            bottom: "12%",
            right: "20%",
            width: "260px",
            rotate: "10deg",
          },
        },
      ],
    },
    {
      flavor: "Peach",
      title: "Ice Cream",
      desc: "Sweet, juicy peach swirled into creamy ice cream for a soft, delightful summer flavor you’ll love.",
      colors: ["#ffdeb3", "#DB893F"],
      main: peachIcecream,
      fruits: [
        {
          src: peach1,
          style: { top: "8%", left: "8%", width: "360px", rotate: "-8deg" },
        },
        {
          src: peach2,
          style: { top: "28%", right: "9%", width: "360px", rotate: "10deg" },
        },
        {
          src: peach3,
          style: {
            bottom: "1%",
            left: "20%",
            width: "360px",
            rotate: "-12deg",
          },
        },
        {
          src: peach4,
          style: {
            bottom: "-5%",
            right: "22%",
            width: "360px",
            rotate: "8deg",
          },
        },
      ],
    },
    {
      flavor: "Blueberry",
      title: "Ice Cream",
      desc: "Bursting with sweet blueberries in every scoop, this ice cream is fruity, creamy, and full of joy.",
      colors: ["#b26cf2", "#9b4fe0"],
      main: blueberryIcecream,
      fruits: [
        {
          src: blueberry1,
          style: { top: "10%", left: "12%", width: "260px", rotate: "-5deg" },
        },
        {
          src: blueberry2,
          style: { top: "25%", right: "15%", width: "260px", rotate: "80deg" },
        },
        {
          src: blueberry3,
          style: {
            bottom: "8%",
            left: "25%",
            width: "260px",
            rotate: "-10deg",
          },
        },
        {
          src: blueberry4,
          style: {
            bottom: "10%",
            right: "20%",
            width: "260px",
            rotate: "6deg",
          },
        },
      ],
    },
    {
      flavor: "Strawberry",
      title: "Ice Cream",
      desc: "Classic strawberry sweetness blended into creamy scoops that are vibrant, fruity, and irresistible.",
      colors: ["#ff9ebc", "#d7265f"],
      main: strawberryIcecream,
      mainStyle: { width: "540px" },
      fruits: [
        {
          src: strawberry1,
          style: { top: "8%", left: "15%", width: "260px", rotate: "-10deg" },
        },
        {
          src: strawberry2,
          style: { top: "20%", right: "18%", width: "260px", rotate: "12deg" },
        },
        {
          src: strawberry3,
          style: {
            bottom: "14%",
            left: "22%",
            width: "200px",
            rotate: "-8deg",
          },
        },
        {
          src: strawberry4,
          style: {
            bottom: "12%",
            right: "15%",
            width: "260px",
            rotate: "10deg",
          },
        },
      ],
    },
    {
      flavor: "Pistachio",
      title: "Ice Cream",
      desc: "Nutty pistachio ice cream that’s rich, creamy, and perfect for a sophisticated, crunchy-smooth flavor experience.",
      colors: ["#d5e5c0", "#a3b97f"],
      main: pistachioIcecream,
      mainStyle: { width: "670px" },
      fruits: [
        {
          src: pistachio1,
          style: { top: "10%", left: "25%", width: "120px", rotate: "-200deg" },
        },
        {
          src: pistachio2,
          style: { top: "25%", right: "15%", width: "160px", rotate: "10deg" },
        },
        {
          src: pistachio3,
          style: {
            bottom: "12%",
            left: "25%",
            width: "120px",
            rotate: "-8deg",
          },
        },
        {
          src: pistachio4,
          style: {
            bottom: "10%",
            right: "20%",
            width: "120px",
            rotate: "6deg",
          },
        },
      ],
    },
    {
      flavor: "Hazelnut",
      title: "Ice Cream",
      desc: "Smooth, rich hazelnut ice cream that melts effortlessly in your mouth, delivering nutty satisfaction in every bite.",
      colors: ["#d9c3a1", "#a67c52"],
      main: hazelnutIcecream,
      mainStyle: { width: "430px" },
      fruits: [
        {
          src: hazelnut1,
          style: { top: "10%", left: "20%", width: "180px", rotate: "-10deg" },
        },
        {
          src: hazelnut2,
          style: { top: "25%", right: "15%", width: "180px", rotate: "10deg" },
        },
        {
          src: hazelnut3,
          style: {
            bottom: "12%",
            left: "18%",
            width: "180px",
            rotate: "-8deg",
          },
        },
        {
          src: hazelnut4,
          style: {
            bottom: "10%",
            right: "18%",
            width: "180px",
            rotate: "6deg",
          },
        },
      ],
    },
    {
      flavor: "Lychee Rose",
      title: "Ice Cream",
      desc: "A delicate fusion of lychee and rose, offering floral sweetness and exotic fruitiness in creamy perfection.",
      colors: ["#eac7deff", "#f38bbaff"],
      main: lycheeroseIcecream,
      mainStyle: { width: "730px"},
      fruits: [
        {
          src: lychee1,
          style: { top: "15%", left: "12%", width: "300px", rotate: "-10deg" },
        },
        {
          src: lychee2,
          style: { top: "45%", right: "12%", width: "300px", rotate: "10deg" },
        },
        {
          src: rose1,
          style: {
            bottom: "12%",
            left: "25%",
            width: "180px",
            rotate: "-8deg",
          },
        },
        {
          src: rose2,
          style: {
            bottom: "60%",
            right: "20%",
            width: "150px",
            rotate: "6deg",
          },
        },
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
        background: `radial-gradient(circle, ${c1} 0%, ${c1} 20%, ${c2} 20%, ${c2} 40%, ${c1} 40%, ${c1} 60%, ${c2} 60%, ${c2} 85%, ${c1} 85%, ${c1} 100%)`,
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
          style={current.mainStyle || {}}
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
