"use client";

import { useRef, useState, useEffect } from "react";
import GraphicBox from "./GraphicBox";
import GraphicSliderHeader from "./GraphicSliderHeader";

const GraphicSlider = ({ title, linkCom }) => {
  const carouselRef = useRef();
  const [mounted, setMounted] = useState(false);

  // داده‌های نمونه برای نمایش
  const dummyGraphics = Array(6).fill({
    title: "رمان ارباب حلقه‌ها",
    image: "/product-slider/product-slider-img.jpg",
    price: "60,000",
    format: "PSD",
    size: "200*100پیکسل",
    volume: "10مگ",
    tags: ["رمان", "داستان", "تالکین"],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="my-12 rounded-lg bg-yellow-400 p-6">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <GraphicSliderHeader
          carouselRef={carouselRef}
          title={title || "گرافیک"}
          linkCom={linkCom || "#"}
        />
        {/* box slider */}
        <div
          ref={carouselRef}
          className="no-scrollbar grid auto-cols-[300px] grid-flow-col gap-6 overflow-x-auto"
        >
          {dummyGraphics.map((graphic, index) => (
            <GraphicBox key={index} graphic={graphic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicSlider;
