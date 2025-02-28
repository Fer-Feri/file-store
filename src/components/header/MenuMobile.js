"use client";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";

const MenuMobile = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <>
      <div
        className={`absolute top-0 bottom-0 z-50 flex w-xs flex-col items-center gap-6 bg-slate-100 pt-12 pb-6 shadow-2xl transition-all ${isOpenMenu ? "right-0" : "-right-[100%]"}`}
      >
        <Button
          asChild
          variant="white"
          className="w-[230px] bg-blue-500 text-white hover:bg-blue-600"
        >
          <Link href="/" className="max-md:text-[16px]">
            خانه
          </Link>
        </Button>
        <Button
          asChild
          variant="white"
          className="w-[230px] bg-blue-500 text-white hover:bg-blue-600"
        >
          <Link href="/" className="max-md:text-[16px]">
            اپلیکیشن‌ها
          </Link>
        </Button>
        <Button
          asChild
          variant="white"
          className="w-[230px] bg-blue-500 text-white hover:bg-blue-600"
        >
          <Link href="/" className="max-md:text-[16px]">
            کتاب‌ها
          </Link>
        </Button>
        <Button
          asChild
          variant="white"
          className="w-[230px] bg-blue-500 text-white hover:bg-blue-600"
        >
          <Link href="/" className="max-md:text-[16px]">
            فایل‌های گرافیکی
          </Link>
        </Button>
        <Button
          asChild
          variant="white"
          className="w-[230px] bg-blue-500 text-white hover:bg-blue-600"
        >
          <Link href="/" className="max-md:text-[16px]">
            وبلاگ
          </Link>
        </Button>
        <IoCloseOutline
          size={33}
          onClick={() => setIsOpenMenu(false)}
          className="absolute top-2 left-2 cursor-pointer text-orange-500"
        />
      </div>
      {/* layer behind menu mobile */}
      {isOpenMenu && (
        <div
          onClick={() => setIsOpenMenu(false)}
          className="absolute top-0 right-0 bottom-0 left-0 z-40 bg-orange-100 opacity-50"
        ></div>
      )}
    </>
  );
};

export default MenuMobile;
