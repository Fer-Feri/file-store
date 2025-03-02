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
import { useRef } from "react";
import { TiTickOutline } from "react-icons/ti";
import GraphicBox from "../graphic-slider/GraphicBox";

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

const MainSingleProduct = () => {
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
            <BreadcrumbLink href="/blog">فروشگاه</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>محصول تستی</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        {/* image */}
        <div className="flex flex-col items-center gap-4 rounded-lg border-2 p-3 shadow-xs lg:flex-row">
          <div className="w-full lg:max-w-[400px]">
            <Image
              width={400}
              height={300}
              src={"/t-shirt.jpg"}
              alt="t-shirt"
              className="w-full rounded-lg object-cover"
              priority
            />
          </div>
          <div className="flex w-full flex-col gap-4 md:w-auto">
            <h1 className="font-bold">موکاپ تی شرت</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span>
                  <TiTickOutline />
                </span>
                <span>حجم فایل</span>
              </div>
              <p>30 مگ</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span>
                  <TiTickOutline />
                </span>
                <span>نرم افزار</span>
              </div>
              <p>ادوبی ایکس دی</p>
            </div>
          </div>
        </div>

        {/* ایکون های خرید */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* 1 */}
          <div className="flex grow items-center gap-3 rounded-xs bg-gray-200 p-4">
            <Image
              width={60}
              height={60}
              src={"/icons/trophy.png"}
              alt="cart"
            />
            <div className="space-y-2">
              <p className="font-bold">محصولات اورجینال</p>
              <p className="text-sm">برترین‌های دنیای وب</p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex grow items-center gap-3 rounded-xs bg-gray-200 p-4">
            <Image
              width={60}
              height={60}
              src={"/icons/feedback.png"}
              alt="cart"
            />
            <div className="space-y-2">
              <p className="font-bold">بالاترین کیفیت</p>
              <p className="text-sm">تاثیرگذارترین در موفقیت</p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex grow items-center gap-3 rounded-xs bg-gray-200 p-4">
            <Image
              width={60}
              height={60}
              src={"/icons/target1.png"}
              alt="cart"
            />
            <div className="space-y-2">
              <p className="font-bold">پشتیبانی</p>
              <p className="text-sm">کمتر از 30 دقیقه</p>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="my-6 space-y-4 rounded-lg border-2 p-4 text-lg leading-relaxed shadow-xl">
          <p>توضیحات کامل</p>
          <p className="leading-9">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنیکهای موجود آن را
            افزایش داد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
            مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنیکهای
            موجود آن را افزایش داد. لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنیکهای موجود آن را افزایش داد. لورم ایپسوم متن ساختگی
            با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
            است و برای شرایط فعلی تکنیکهای موجود آن را افزایش داد. لورم ایپسوم
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            که لازم است و برای شرایط فعلی تکنیکهای موجود آن را افزایش داد. لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است و برای شرایط فعلی تکنیکهای موجود آن را افزایش
            داد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنیکهای موجود آن را
            افزایش داد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
            مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنیکهای
            موجود آن را افزایش داد.
          </p>
        </div>

        {/* article slider */}
        <div className="rounded-xl bg-gray-100 px-4 py-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">محصولات مرتبط</h2>
            {renderButtons()}
          </div>

          <div
            ref={carouselRef}
            className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth py-2"
          >
            {dummyGraphics.map((graphic, index) => (
              <GraphicBox
                key={index}
                graphic={graphic}
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

export default MainSingleProduct;
