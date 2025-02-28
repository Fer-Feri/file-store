import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const ProductSliderHeader = ({ carouselRef }) => {
  // حرکت اسلایدر
  const carouselSwitcher = (num) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current?.offsetWidth || 0;
      carouselRef.current.scrollBy({
        left: itemWidth * num,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-9 flex items-center justify-between">
      <p className="border-r-3 pr-3 text-2xl font-bold text-white">
        اپلیکیشن‌ها
      </p>
      <div className="flex items-center gap-3">
        <FaAngleRight
          onClick={() => carouselSwitcher(1)}
          className="h-8 w-8 cursor-pointer rounded-[5px] bg-gray-200 p-0.5 text-gray-700"
        />
        <FaAngleLeft
          onClick={() => carouselSwitcher(-1)}
          className="h-8 w-8 cursor-pointer rounded-[5px] bg-gray-200 p-0.5 text-gray-700"
        />
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[5px] border-2 border-white bg-orange-500 px-2.5 py-1.5 text-white"
        >
          مشاهده همه
        </Link>
      </div>
    </div>
  );
};

export default ProductSliderHeader;
