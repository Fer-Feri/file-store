"use client";

import { useRef, useState, useEffect } from "react";
import { ProductSliderSkeleton, Skeleton } from "@/components/loading";
import LatestArticleBox from "./LatestArticleBox";

// داده‌های موقت
const DUMMY_Article = [
  {
    id: 1,
    title: "رمان ارباب حلقه‌ها",
    description: "رمان ارباب حلقه‌ها یکی از مشهورترین آثار ادبی فانتزی است.",
    image: "/product-slider/product-slider-img.jpg",
    createdAt: "10/2/1403",
    viewNum: "5",
  },
  {
    id: 2,
    title: "کتاب هری پاتر",
    image: "/product-slider/product-slider-img.jpg",
    createdAt: "10/2/1403",
    viewNum: "5",
  },
  {
    id: 3,
    title: "کتاب هری پاتر",
    image: "/product-slider/product-slider-img.jpg",
    createdAt: "10/2/1403",
    viewNum: "5",
  },
  {
    id: 4,
    title: "کتاب هری پاتر",
    image: "/product-slider/product-slider-img.jpg",
    createdAt: "10/2/1403",
    viewNum: "5",
  },
];

const LatestArticle = ({ title }) => {
  const carouselRef = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) <ProductSliderSkeleton />;

  return (
    <section className="mt-12 mb-12 rounded-lg bg-gray-200 p-6">
      <div className="mx-auto max-w-7xl">
        <header>
          <h2 className="my-9 mt-3 border-r-2 border-slate-900 pr-2 text-base font-bold text-slate-900 sm:text-2xl">
            {title}
          </h2>
        </header>
        <div
          ref={carouselRef}
          className="no-scrollbar grid auto-cols-[300px] grid-flow-col gap-6 overflow-x-auto scroll-smooth"
        >
          {DUMMY_Article.map((article) => (
            <LatestArticleBox key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticle;
