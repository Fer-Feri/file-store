import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-100">
      {/* بخش اصلی فوتر */}
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ستون اول - لوگو و توضیحات */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              width={120}
              height={120}
              alt="لوگو"
              className="h-auto w-auto"
            />
            <p className="text-justify text-gray-600">
              فروشگاه فایل ما، ارائه دهنده انواع فایل‌های دیجیتال، نرم‌افزار و
              محتوای آموزشی با بالاترین کیفیت و قیمت مناسب.
            </p>
          </div>

          {/* ستون دوم - دسترسی سریع */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">دسترسی سریع</h3>
            <ul className="space-y-2">
              {["درباره ما", "وبلاگ", "حریم خصوصی", "تماس با ما"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-gray-600 transition-colors hover:text-orange-500"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* ستون سوم - راهنمای خرید */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">راهنمای خرید</h3>
            <ul className="space-y-2">
              {[
                "سوالات متداول",
                "چگونه خرید کنیم؟",
                "قوانین استفاده از محصولات",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-gray-600 transition-colors hover:text-orange-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون چهارم - نمادها */}
          <div className="flex items-center gap-4">
            <Image
              src="/enamad.png"
              width={115}
              height={115}
              alt="نماد اعتماد الکترونیکی"
              className="h-auto w-auto"
            />
            <Image
              src="/kasbokar.png"
              width={115}
              height={115}
              alt="نماد کسب و کار مجازی"
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>

      {/* بخش پایینی فوتر */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <p className="text-sm text-gray-600">
            حقوق مادی و معنوی این وبسایت محفوظ است / طراح: فرشاد
          </p>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
