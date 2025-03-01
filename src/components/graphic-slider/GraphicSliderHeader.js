"use client";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";

const GraphicSliderHeader = ({ carouselRef, title, linkCom }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrevClick = () => {
    if (!carouselRef?.current) return;

    const scrollAmount = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleNextClick = () => {
    if (!carouselRef?.current) return;

    const scrollAmount = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const renderButtons = () => {
    if (!mounted) return null;

    return (
      <>
        <button
          onClick={handlePrevClick}
          className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-gray-200 transition-colors hover:bg-gray-300"
          aria-label="مشاهده محصولات قبلی"
          type="button"
        >
          <FaAngleRight className="text-gray-700" />
        </button>
        <button
          onClick={handleNextClick}
          className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-gray-200 transition-colors hover:bg-gray-300"
          aria-label="مشاهده محصولات بعدی"
          type="button"
        >
          <FaAngleLeft className="text-gray-700" />
        </button>
      </>
    );
  };

  return (
    <header className="mb-9 flex flex-wrap items-center justify-between gap-4">
      <h2 className="border-r-3 border-slate-900 pr-3 text-xl font-bold text-slate-900 sm:text-2xl">
        {title}
      </h2>
      <div className="flex items-center gap-3">
        {renderButtons()}
        <Link
          href={linkCom || "#"}
          className="rounded-[5px] border-2 border-white bg-orange-500 px-2.5 py-1.5 text-white transition-colors hover:bg-orange-600"
        >
          مشاهده همه
        </Link>
      </div>
    </header>
  );
};

export default GraphicSliderHeader;
