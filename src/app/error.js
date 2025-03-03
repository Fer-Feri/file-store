"use client";

import Link from "next/link";

const Error = ({ error, reset }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 px-4 py-16">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          خطایی رخ داده است
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          متاسفانه مشکلی در سیستم رخ داده است. لطفا دوباره تلاش کنید
        </p>
      </div>

      <button
        onClick={reset}
        className="rounded-lg bg-blue-500 px-8 py-3 text-white transition-colors hover:bg-blue-600"
      >
        تلاش مجدد
      </button>

      <Link
        href="/"
        className="rounded-lg bg-orange-500 px-8 py-3 text-white transition-colors hover:bg-orange-600"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default Error;
