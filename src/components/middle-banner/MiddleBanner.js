"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Skeleton from "@/components/loading/Skeleton";

const MiddleBanner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2">
        <Skeleton className="h-[300px] w-full rounded-[5px] sm:w-[48%]" />
        <Skeleton className="h-[300px] w-full rounded-[5px] sm:w-[48%]" />
      </section>
    );
  }

  return (
    <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2">
      <Link href="/banner-1-link" className="group w-full sm:w-[48%]">
        <Image
          src="/middle-banner/1.jpg"
          width={600}
          height={300}
          className="w-full rounded-[5px] transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ objectFit: "cover" }}
          priority
          alt="middle-banner-1"
        />
      </Link>

      <Link href="/banner-2-link" className="group w-full sm:w-[48%]">
        <Image
          src="/middle-banner/2.jpg"
          width={600}
          height={300}
          className="w-full rounded-[5px] transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ objectFit: "cover" }}
          priority
          alt="middle-banner-2"
        />
      </Link>
    </section>
  );
};

export default MiddleBanner;
