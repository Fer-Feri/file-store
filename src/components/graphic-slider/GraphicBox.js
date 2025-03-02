"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CiBookmarkPlus, CiSearch } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdFormatColorFill } from "react-icons/md";
import { IoIosResize } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import { GraphicSliderSkeleton } from "../loading";

const GraphicBox = ({ graphic, className }) => {
  const [mounted, setMounted] = useState(false);

  // داده‌های پیش‌فرض
  const defaultGraphic = {
    title: "رمان ارباب حلقه‌ها",
    image: "/product-slider/product-slider-img.jpg",
    price: "60,000",
    format: "PSD",
    size: "200*100پیکسل",
    volume: "10مگ",
    tags: ["رمان", "داستان", "تالکین"],
  };

  // استفاده از داده‌های graphic یا داده‌های پیش‌فرض
  const {
    title = defaultGraphic.title,
    image = defaultGraphic.image,
    price = defaultGraphic.price,
    format = defaultGraphic.format,
    size = defaultGraphic.size,
    volume = defaultGraphic.volume,
    tags = defaultGraphic.tags,
  } = graphic || {};

  useEffect(() => {
    setMounted(true);
  }, []);

  // اگر هنوز در کلاینت رندر نشده، یک نسخه ساده نمایش بده
  if (!mounted) return <GraphicSliderSkeleton />;

  return (
    <article className={`h-full w-full max-w-[300px] ${className || ""}`}>
      <Card className="flex h-full flex-col pb-2">
        <CardHeader className="flex-none">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 300px) 100vw, 300px"
              priority
            />
          </div>
          <CardTitle className="mt-2 line-clamp-2 text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mb-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1">
                <MdFormatColorFill />
                <span className="">فرمت</span>
              </p>
              <p>{format}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1">
                <IoIosResize />
                <span className="">اندازه</span>
              </p>
              <p>{size}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1">
                <FaCopy />
                <span className="">حجم</span>
              </p>
              <p>{volume}</p>
            </div>
          </div>

          <div className="my-4 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`} className="no-underline">
                <Badge className="cursor-pointer bg-gray-300 px-2 py-1 text-sm text-slate-900 transition-colors hover:bg-gray-400">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>

        <CardFooter className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              className="rounded-full p-1 transition-colors hover:bg-gray-100"
              aria-label="ذخیره در علاقه‌مندی‌ها"
            >
              <CiBookmarkPlus size={24} />
            </button>
            <button
              className="rounded-full p-1 transition-colors hover:bg-gray-100"
              aria-label="جستجوی محصول"
            >
              <CiSearch size={24} />
            </button>
          </div>
          <div className="-ml-6 flex items-center">
            <button
              className="rounded-full p-2 transition-colors hover:bg-gray-100"
              aria-label="افزودن به سبد خرید"
            >
              <MdShoppingCartCheckout size={24} />
            </button>
            <Badge className="rounded-l-none bg-gray-300 px-3 py-1 text-sm text-slate-900">
              {price} تومان
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </article>
  );
};

export default GraphicBox;
