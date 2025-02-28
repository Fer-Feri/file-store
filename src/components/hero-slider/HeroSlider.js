/** @format */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCircleDot } from "react-icons/fa6";

const imageSlider = [
  "/hero-slider/slider-1-img.jpg",
  "/hero-slider/slider-2-img.jpg",
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageSlider.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-9">
      <div className="relative container px-2">
        <div className="w-full">
          <Image
            src={imageSlider[currentIndex]}
            width={1400}
            height={500}
            style={{ objectFit: "cover" }}
            alt="hero-slider-1"
            priority
          />
        </div>
        {/* dots */}
        <div className="absolute bottom-3 left-1/2 flex gap-3">
          {imageSlider.map((_, i) => (
            <FaCircleDot
              key={i}
              className={`transition-colors duration-300 ${currentIndex === i ? "text-white" : "text-white opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
