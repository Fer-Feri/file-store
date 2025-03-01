"use client";

import { useRef, useState, useEffect } from "react";
import SliderBox from "./SliderBox";
import ProductSliderHeader from "./ProductSliderHeader";
import { Skeleton } from "@/components/loading";

// داده‌های موقت
const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "رمان ارباب حلقه‌ها",
    image: "/product-slider/product-slider-img.jpg",
    price: "60,000",
    tags: ["رمان", "داستان", "تالکین"],
  },
  {
    id: 2,
    title: "کتاب هری پاتر",
    image: "/product-slider/product-slider-img.jpg",
    price: "75,000",
    tags: ["رمان", "فانتزی"],
  },
  {
    id: 3,
    title: "کتاب هری پاتر",
    image: "/product-slider/product-slider-img.jpg",
    price: "75,000",
    tags: ["رمان", "فانتزی"],
  },
  {
    id: 4,
    title: "کتاب هری پاتر",
    image: "/product-slider/product-slider-img.jpg",
    price: "75,000",
    tags: ["رمان", "فانتزی"],
  },
  {
    id: 5,
    title: "کتاب هری پاتر",
    image: "/product-slider/product-slider-img.jpg",
    price: "75,000",
    tags: ["رمان", "فانتزی"],
  },
  {
    id: 6,
    title: "کتاب هری پاتر",
    image: "/product-slider/product-slider-img.jpg",
    price: "75,000",
    tags: ["رمان", "فانتزی"],
  },
];

const ProductSlider = ({ title, linkCom }) => {
  const carouselRef = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="mx-auto mt-12 mb-12 max-w-7xl rounded-lg bg-violet-500 p-6">
        <div className="grid grid-cols-1 gap-6">
          <Skeleton className="h-[400px] w-full rounded-lg" />
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12 mb-12 rounded-lg bg-violet-500 p-6">
      <div className="mx-auto max-w-7xl">
        <header>
          <ProductSliderHeader
            carouselRef={carouselRef}
            title={title}
            linkCom={linkCom}
          />
        </header>
        <div
          ref={carouselRef}
          className="no-scrollbar grid auto-cols-[300px] grid-flow-col gap-6 overflow-x-auto scroll-smooth"
        >
          {DUMMY_PRODUCTS.map((product) => (
            <SliderBox key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
