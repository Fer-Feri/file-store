"use client";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="rounded bg-orange-500 p-2 text-white transition-colors hover:bg-orange-600"
      aria-label="رفتن به بالای صفحه"
    >
      <IoIosArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
