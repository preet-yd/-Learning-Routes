import React, { useEffect, useState } from "react";
import posterImg1 from "../images/poster.webp";
import posterImg2 from "../images/poster1.webp";
import image1 from "../images/s2.webp";
import image2 from "../images/s3.webp";

const HeroSection = () => {
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
    const interval = setInterval(() => {
      setCounter((prev) => prev + Math.floor(Math.random() * 5)); 
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen px-4 py-6 sm:px-6 md:px-10">
      
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-700 font-extrabold mt-2">
          {slides[currentSlide].subtitle}
        </p>
        <span className="text-sm md:text-md text-gray-600 mt-2 block">
          {slides[currentSlide].description}
        </span>
      </div>

      
      <div className="flex justify-center mb-6">
        <img
          src={slides[currentSlide].posterImage}
          alt="Top Image"
          className="rounded-lg w-full max-w-sm"
        />
      </div>

      
      <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search for colleges and courses"
          className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M9.5 17A7.5 7.5 0 1 1 17 9.5 7.5 7.5 0 0 1 9.5 17z"
            />
          </svg>
        </button>
      </div>

      
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-md shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-gray-800">
            {counter.toLocaleString()}
          </span>
          <span className="text-red-600 text-sm font-medium">LIVE</span>
        </div>
        <p className="text-gray-600 mt-2 font-medium">STUDENTS COUNSELLED</p>
      </div>

      
      <div className="flex justify-center">
        <img
          src={slides[currentSlide].image}
          alt="Bottom Image"
          className="rounded-lg w-full max-w-sm"
        />
      </div>
    </div>
  );
};

export default HeroSection;
