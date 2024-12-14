import React, { useState, useEffect } from "react";
import image1 from "./images/s2.webp";
import image2 from "./images/s3.webp";
import posterImg1 from "./images/poster.webp";
import posterImg2 from "./images/poster1.webp";
import SearchBox from "./components/searchBox";

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
      image: image1,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-96 bg-blue-100 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          

          <h1 className="text-xl text-black">{slide.title}</h1>
          <h2 className="text-2xl font-semibold text-blue-600 mt-2">
            {slide.subtitle}
          </h2>
          <p className="text-lg text-blue-500 mt-4">{slide.description}</p>
          <img
            src={slide.posterImage}
            alt={slide.title}
            className="h-16 w-52 mt-6 rounded-md shadow-lg "
          />
          <SearchBox />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-96 h- mt-6 rounded-md shadow-lg "
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
