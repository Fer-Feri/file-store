"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BannerSkeleton } from "../loading";

const CategoryBox = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <BannerSkeleton />;
  }

  return (
    <Link
      href="/"
      target="_blank"
      className="flex cursor-pointer items-center justify-between gap-9 rounded-xl bg-gray-200 p-3 transition-colors duration-300 hover:bg-gray-300"
    >
      <div className="flex flex-col gap-3">
        <p className="text-xl">فایل لایه باز فتوشاپ</p>
        <p className="text-base md:text-xs">وکتورهای گرافیکی قدرتمند</p>
      </div>
      <Image
        src="/category/photoshop2-min.png"
        width={50}
        height={50}
        priority
        alt="category-img"
      />
    </Link>
  );
};

export default CategoryBox;
