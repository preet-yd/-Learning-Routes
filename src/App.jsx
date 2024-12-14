import React, { useState, useEffect } from "react";
import image1 from "./images/s2.webp";
import image2 from "./images/s3.webp";
import posterImg1 from "./images/poster.webp";
import posterImg2 from "./images/poster1.webp";
import HeroSection from "./components/heroSection";

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      title: "India Ki Top Universities Se",
      subtitle: "Skills Enhance Karo!",
      description: "12000+ Courses Await You!",
      posterImage: posterImg1,
      image: image1,
    },
    {
      id: 2,
      title: "Bas Qualified Rhne Se Kya Fayda",
      subtitle: "Asli swag toh gyaan hai!",
      description: "#SahiRastaSahiGuidance",
      posterImage: posterImg2,
      image: image2,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [counter, setCounter] = useState(1439380); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 1000);
    return () => clearInterval(counterInterval);
  }, []);

  return (
    <HeroSection slides={slides} currentSlide={currentSlide} counter={counter} />
  );
};

export default Slideshow;
