"use client";

import MainSingleBlog from "@/components/single-page-blog/MainSingleBlog";
import SideSingleBlog from "@/components/single-page-blog/SideSingleBlog";
import { useState, useEffect } from "react";

const SinglePageBlog = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-2 py-10">
        <div className="h-screen w-full animate-pulse rounded-lg bg-gray-200 lg:w-4/5"></div>
        <div className="hidden h-screen animate-pulse rounded-lg bg-gray-200 lg:block lg:w-1/5"></div>
      </section>
    );
  }

  return (
    <section className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-2 py-10">
      <MainSingleBlog />
      <SideSingleBlog s />
    </section>
  );
};

export default SinglePageBlog;
