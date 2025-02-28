"use client";

import SliderBox from "./SliderBox";

import { useRef } from "react";
import ProductSliderHeader from "./ProductSliderHeader";

const ProductSlider = () => {
  const carouselRef = useRef();

  return (
    <section className="mt-20 mb-12 rounded-lg bg-violet-500 p-6">
      {/* header */}
      <ProductSliderHeader carouselRef={carouselRef} />
      {/* box slider */}
      <div ref={carouselRef} className="no-scrollbar flex gap-6 overflow-auto">
        <SliderBox />
        <SliderBox />
        <SliderBox />
        <SliderBox />
        <SliderBox />
        <SliderBox />
      </div>
    </section>
  );
};

export default ProductSlider;
