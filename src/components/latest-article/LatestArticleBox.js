"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ProductSliderSkeleton } from "../loading";

const LatestArticleBox = ({ article }) => {
  const [mounted, setMounted] = useState(false);

  // داده‌های پیش‌فرض فقط برای زمانی که article وجود ندارد
  const defaultArticle = {
    title: "رمان ارباب حلقه‌ها",
    description: "رمان ارباب حلقه‌ها یکی از مشهورترین آثار ادبی فانتزی است...",
    image: "/product-slider/product-slider-img.jpg",
    createdAt: "10/2/1403",
    viewNum: "5",
    slug: "lord-of-the-rings",
  };

  // استفاده از داده‌های article یا داده‌های پیش‌فرض
  const {
    title = defaultArticle.title,
    image = defaultArticle.image,
    description = defaultArticle.description,
    createdAt = defaultArticle.createdAt,
    viewNum = defaultArticle.viewNum,
    slug = defaultArticle.slug,
  } = article || {};

  useEffect(() => {
    setMounted(true);
  }, []);

  // اگر هنوز در کلاینت رندر نشده، یک نسخه ساده نمایش بده
  if (!mounted) return <ProductSliderSkeleton />;

  // اطمینان از اینکه توضیحات بیش از حد کوتاه نباشد
  const formattedDescription =
    description?.length < 50
      ? `${description} این مقاله توضیحات بیشتری در صفحه اختصاصی دارد...`
      : description;

  return (
    <Link
      href={`/articles/${slug}`}
      className="block h-full w-full max-w-[320px] no-underline"
    >
      <article className="group h-full transition-transform duration-300 hover:scale-[1.02]">
        <Card className="flex h-full flex-col pb-0 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
          <CardHeader className="flex-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 320px) 100vw, 320px"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </div>
            <CardTitle className="mt-2 line-clamp-2 text-lg">{title}</CardTitle>
          </CardHeader>

          <CardDescription className="px-6">
            <p className="line-clamp-3 text-sm text-gray-600">
              {formattedDescription}
            </p>
          </CardDescription>

          <CardFooter className="mt-auto flex items-center justify-between border-t-2 border-gray-200 p-4">
            <Badge className="rounded-[5px] bg-gray-200 py-1 text-sm text-slate-900">
              {createdAt}
            </Badge>
            <Badge className="rounded-[5px] bg-gray-200 py-1 text-sm text-slate-900">
              {viewNum} دیدگاه
            </Badge>
          </CardFooter>
        </Card>
      </article>
    </Link>
  );
};

export default LatestArticleBox;
