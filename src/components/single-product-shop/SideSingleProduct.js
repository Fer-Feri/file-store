"use client";

import { Badge } from "../ui/badge";
import Link from "next/link";

const SideSingleProduct = () => {
  return (
    <>
      <div className="w-full space-y-6 px-2 py-6 md:max-w-[25%]">
        {/* دکمه افزودن به سبد خرید */}
        <div className="flex flex-col gap-4">
          <button className="w-full rounded-md bg-orange-500 px-4 py-3 text-white transition-colors hover:bg-orange-600">
            افزودن به سبد خرید
          </button>
          <button className="w-full rounded-md bg-blue-500 px-4 py-3 text-white transition-colors hover:bg-blue-600">
            افزودن به علاقه‌مندی‌ها
          </button>
        </div>

        {/*  مشخصات محصول */}
        <div className="flex flex-col gap-2 rounded-xl border-2 p-3 shadow-xl">
          <p className="flex items-center justify-between">
            <span>قیمت محصول</span>
            <span className="text-blue-400">300،000</span>
          </p>
          <p className="flex items-center justify-between">
            <span>تعداد خرید</span>
            <span>3</span>
          </p>
          <p className="flex items-center justify-between">
            <span>تعداد دیدگاه</span>
            <span>1</span>
          </p>
        </div>

        {/*  معرفی */}
        <div className="flex flex-col gap-2 rounded-xl border-2 p-3 shadow-xl">
          <h3 className="font-bold text-blue-500">معرفی کوتاه</h3>
          <p>این محصول از محصولات خوبی است و به خوبی کار می کند </p>
        </div>

        {/* دسته بندی */}
        <div className="flex flex-col gap-2 space-y-2.5 rounded-xl border-2 p-3 shadow-xl">
          <h3 className="font-bold text-blue-500">دسته‌بندی‌ها</h3>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/categories/category-1"
              className="text-inherit no-underline"
            >
              <Badge
                variant="white"
                className="p-2 text-base transition-colors duration-200 hover:bg-gray-200"
              >
                اپ گرافیکی
              </Badge>
            </Link>
            <Link
              href="/categories/category-1"
              className="text-inherit no-underline"
            >
              <Badge
                variant="white"
                className="p-2 text-base transition-colors duration-200 hover:bg-gray-200"
              >
                فتوشاپ
              </Badge>
            </Link>
          </div>
        </div>

        {/*  محصولات */}
        <div className="flex flex-col gap-2 space-y-2.5 rounded-xs border-2 p-2 shadow-xl">
          <h3 className="font-bold text-blue-500">برچسب‌ها</h3>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/categories/category-1"
              className="text-inherit no-underline"
            >
              <Badge
                variant="white"
                className="p-2 text-base transition-colors duration-200 hover:bg-gray-200"
              >
                # اپ گرافیکی
              </Badge>
            </Link>
            <Link
              href="/categories/category-1"
              className="text-inherit no-underline"
            >
              <Badge
                variant="white"
                className="p-2 text-base transition-colors duration-200 hover:bg-gray-200"
              >
                # فتوشاپ
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSingleProduct;
