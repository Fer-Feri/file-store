/** @format */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCircleDot } from "react-icons/fa6";
import { ImageSkeleton } from "@/components/loading";
import Link from "next/link";

const imageSlider = [
  {
    id: 1,
    src: "/hero-slider/slider-1-img.jpg",
    alt: "slider-1",
    href: "/link-1",
  },
  {
    id: 2,
    src: "/hero-slider/slider-2-img.jpg",
    alt: "slider-2",
    href: "/link-2",
  },
  {
    id: 3,
    src: "/hero-slider/slider-3-img.jpg",
    alt: "slider-3",
    href: "/link-3",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageSlider.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="mx-auto mt-9 max-w-7xl">
        <ImageSkeleton />
      </div>
    );
  }

  return (
    <section className="mx-auto mt-9 max-w-7xl">
      <div className="relative container px-2">
        {/* اسلایدر */}
        <div className="relative w-full overflow-hidden rounded-lg">
          <Link
            href={imageSlider[currentIndex].href}
            className="group block h-full w-full"
          >
            <Image
              src={imageSlider[currentIndex].src}
              alt={imageSlider[currentIndex].alt}
              width={1400}
              height={1000}
              className="transition-all duration-300 group-hover:scale-105"
              priority
              // sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 1400px"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          </Link>
        </div>

        {/* دکمه‌های اسلایدر */}
        <div className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-3">
          {imageSlider.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(i)}
              className="group"
              aria-label={`Go to slide ${i + 1}`}
            >
              <FaCircleDot
                size={9}
                className={`transition-all duration-300 ${
                  currentIndex === i
                    ? "text-white"
                    : "text-white/50 hover:text-white/75"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
