"use client";

import MainSingleProduct from "@/components/single-product-shop/MainSingleProduct";
import SideSingleProduct from "@/components/single-product-shop/SideSingleProduct";
import { useState, useEffect } from "react";

const SinglePageBlog = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="mx-auto flex max-w-7xl justify-between gap-3 px-2 py-10">
        <div className="h-screen w-full animate-pulse rounded-lg bg-gray-200 lg:w-4/5"></div>
        <div className="h-screen w-full animate-pulse rounded-lg bg-gray-200 lg:w-1/5"></div>
      </section>
    );
  }

  return (
    <section className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-2 py-10">
      <MainSingleProduct />
      <SideSingleProduct />
    </section>
  );
};

export default SinglePageBlog;
