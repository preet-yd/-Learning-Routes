import Carousel from "./components/Carousel";
import React, { useEffect, useState } from "react";
import image1 from "./images/s2.webp";
import image2 from "./images/s3.webp";

const slides = [
  {
    id: 1,
    title: "India Ki Top Universities Se",
    description: "12000+ Courses Await You!",
    media: image1,
  },
  {
    id: 2,
    title: "Asli Swag Toh Gyaan Hai!",
    description: "#SahiRastaSahiGuidance",
    media: image2,
  },
];

function App() {
  const [counter, setCounter] = useState(1439380);

  useEffect(() => {
    const fetchCounterUpdate = async () => {
      try {
        
        const response = await fetch("https://your-backend-endpoint.com/counter");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json(); 
        if (data.counter !== counter) {
          setCounter(data.counter); 
        }
      } catch (error) {
        console.error("Failed to fetch counter update:", error);
      }
    };

    const interval = setInterval(fetchCounterUpdate, 3000);

    return () => clearInterval(interval);
  }, [counter]); 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-6">
      <div className="max-w-3xl w-full">
        <Carousel autoSlide={true}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex flex-col items-center justify-center text-center"
            >
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-blue-700 font-medium mb-4">
                {slide.description}
              </p>
              <img
                src={slide.media}
                alt={slide.title}
                className="rounded-lg w-full h-64 object-contain"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 m-4 bg-red-100 px-4 py-2 rounded-md shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-gray-800">
            {counter.toLocaleString()}
          </span>
          <span className="text-red-600 text-sm font-medium">LIVE</span>
        </div>
        <p className="text-gray-600 mt-2 font-medium">STUDENTS COUNSELLED</p>
      </div>

      <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-md mx-auto mt-8">
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
    </div>
  );
}

export default App;
