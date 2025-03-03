import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 px-4">
      {/* تصویر 404 */}
      <div className="relative h-64 w-64">
        <Image
          src="/not-found.png"
          alt="صفحه مورد نظر یافت نشد"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* متن خطا */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          صفحه مورد نظر یافت نشد
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است
        </p>
      </div>

      {/* دکمه بازگشت به خانه */}
      <Link
        href="/"
        className="rounded-lg bg-blue-500 px-8 py-3 text-white transition-colors hover:bg-blue-600"
      >
        بازگشت به صفحه اصلی
      </Link>

      {/* راهنمایی‌های مفید */}
      <div className="mt-8 text-center text-gray-600">
        <p className="mb-2">چند پیشنهاد:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>آدرس صفحه را بررسی کنید</li>
          <li>از منوی اصلی سایت استفاده کنید</li>
          <li>به صفحه اصلی برگردید</li>
          <li>با پشتیبانی تماس بگیرید</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
