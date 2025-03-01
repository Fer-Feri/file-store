"use client";
import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const BasketUserIcons = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      {/* like icon*/}
      <div className="cursor-pointer rounded-sm bg-blue-500 p-2">
        <FaRegHeart color="white" size={27} />
      </div>
      {/* user icon*/}
      <div className="cursor-pointer rounded-sm bg-gray-500 p-2">
        <FaRegUser color="white" size={27} />
      </div>
      {/* basket icon*/}
      <div className="flex cursor-pointer items-center gap-3 rounded-sm bg-orange-500 p-1.5">
        <div className="relative h-8 w-8 rounded-full bg-white">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF6900]">
            0
          </span>
        </div>
        <span className="text-white max-lg:hidden">سبد خرید</span>
        <MdOutlineAddShoppingCart
          className="rounded bg-white p-[3px] text-[#FF6900]"
          size={33}
        />
      </div>
    </div>
  );
};

export default BasketUserIcons;
