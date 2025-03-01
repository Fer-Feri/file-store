"use client";

import { useRef } from "react";
import GraphicBox from "./GraphicBox";
import GraphicSliderHeader from "./GraphicSliderHeader";

const GraphicSlider = ({ title, linkCom }) => {
  const carouselRef = useRef();

  return (
    <section className="mt-12 mb-12 rounded-lg bg-yellow-400 p-6">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <GraphicSliderHeader
          carouselRef={carouselRef}
          title={title}
          linkCom={linkCom}
        />
        {/* box slider */}
        <div
          ref={carouselRef}
          className="no-scrollbar flex gap-6 overflow-auto"
        >
          <GraphicBox />
          <GraphicBox />
          <GraphicBox />
          <GraphicBox />
          <GraphicBox />
          <GraphicBox />
        </div>
      </div>
    </section>
  );
};

export default GraphicSlider;
