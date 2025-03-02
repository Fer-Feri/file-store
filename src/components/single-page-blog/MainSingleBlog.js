"use client";
import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import {
  FaRegEye,
  FaRegComment,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { useRef } from "react";
import LatestArticleBox from "@/components/latest-article/LatestArticleBox";

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
    id: 7,
    title: "رمان ارباب حلقه‌ها",
    description: "رمان ارباب حلقه‌ها یکی از مشهورترین آثار ادبی فانتزی است.",
    image: "/product-slider/product-slider-img.jpg",
    createdAt: "10/2/1403",
    viewNum: "5",
  },
  {
    id: 9,
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

const MainSingleBlog = ({ showSide }) => {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (!carouselRef?.current) return;

    const scrollAmount = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleNextClick = () => {
    if (!carouselRef?.current) return;

    const scrollAmount = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const renderButtons = () => {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrevClick}
          className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-gray-200 transition-colors hover:bg-gray-300 sm:h-8 sm:w-8"
          aria-label="مشاهده محصولات قبلی"
          type="button"
        >
          <FaAngleRight className="text-gray-700" />
        </button>
        <button
          onClick={handleNextClick}
          className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-gray-200 transition-colors hover:bg-gray-300 sm:h-8 sm:w-8"
          aria-label="مشاهده محصولات بعدی"
          type="button"
        >
          <FaAngleLeft className="text-gray-700" />
        </button>
      </div>
    );
  };

  return (
    <section className="mx-auto max-w-[65%] px-4 py-8 max-md:max-w-full">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">خانه</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">وبلاگ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>مقاله تستی</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        {/* image */}
        <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-lg">
          <Image
            src={"/single-article.jpg"}
            alt="مقاله تستی"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        {/* title */}
        <h1 className="text-2xl font-bold md:text-3xl">مقاله تستی</h1>

        {/* icons */}
        <div className="flex flex-wrap items-center justify-start gap-2">
          <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-2 py-1">
            <FaRegEye />
            <span>تعداد بازدید:</span>
            <span>13</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-2 py-1">
            <FaRegComment />
            <span>تعداد نظرات:</span>
            <span>6</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-2 py-1">
            <IoCalendarOutline />
            <span>آخرین بروزرسانی:</span>
            <span>10/2/1403, 10:30</span>
          </div>
        </div>

        {/* content */}
        <div className="my-6 text-lg leading-relaxed">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنیکهای موجود آن را
            افزایش داد.
          </p>
        </div>

        {/* article slider */}
        <div className="rounded-xl bg-gray-100 px-4 py-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">مقالات مرتبط</h2>
            {renderButtons()}
          </div>

          <div
            ref={carouselRef}
            className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth py-2"
          >
            {DUMMY_Article.map((article) => (
              <LatestArticleBox
                key={article.id}
                article={article}
                className="w-[280px] shrink-0 md:w-[320px]"
              />
            ))}
          </div>
        </div>

        {/* comment */}
        <div className="mt-8 rounded-xl border border-gray-200 p-6">
          <h2 className="mb-4 text-lg font-semibold">نظرات</h2>
          <form>
            <textarea
              name="comment"
              id="comment"
              className="mt-2 w-full rounded-md border border-gray-300 p-3"
              placeholder="نظر خود را بنویسید..."
              rows={4}
              required
            />
            <button
              type="submit"
              className="mt-3 w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
              ارسال نظر
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            اولین نفری باشید که برای این مطلب دیدگاهتان را ثبت میکنید.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSingleBlog;
