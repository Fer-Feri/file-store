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
import { CiBookmarkPlus, CiSearch } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ProductSliderSkeleton } from "../loading";

const SliderBox = ({ product }) => {
  // اضافه کردن state برای کنترل رندر در کلاینت
  const [mounted, setMounted] = useState(false);

  // داده‌های پیش‌فرض
  const defaultProduct = {
    title: "رمان ارباب حلقه‌ها",
    image: "/product-slider/product-slider-img.jpg",
    price: "60,000",
    tags: ["رمان", "داستان", "تالکین"],
  };

  // استفاده از داده‌های product یا داده‌های پیش‌فرض
  const {
    title = defaultProduct.title,
    image = defaultProduct.image,
    price = defaultProduct.price,
    tags = defaultProduct.tags,
  } = product || {};

  useEffect(() => {
    setMounted(true);
  }, []);

  // اگر هنوز در کلاینت رندر نشده، یک نسخه ساده نمایش بده
  if (!mounted) ProductSliderSkeleton;

  return (
    <article className="h-full w-full max-w-[320px]">
      <Card className="flex h-full flex-col">
        <CardHeader className="flex-none">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 320px) 100vw, 320px"
              priority
            />
          </div>
          <CardTitle className="mt-2 line-clamp-2 text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} className="no-underline">
              <Badge className="cursor-pointer bg-gray-300 px-2 py-1 text-sm text-slate-900 transition-colors hover:bg-gray-400">
                {tag}
              </Badge>
            </Link>
          ))}
        </CardContent>

        <CardFooter className="mt-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <button
              className="rounded-full p-2 transition-colors hover:bg-gray-100"
              aria-label="ذخیره در علاقه‌مندی‌ها"
            >
              <CiBookmarkPlus size={24} />
            </button>
            <button
              className="rounded-full p-2 transition-colors hover:bg-gray-100"
              aria-label="جستجوی محصول"
            >
              <CiSearch size={24} />
            </button>
          </div>
          <div className="-ml-4 flex items-center">
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

export default SliderBox;
