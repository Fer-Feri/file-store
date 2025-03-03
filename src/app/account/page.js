"use client";

const AccountPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">تنظیمات حساب کاربری</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* تنظیمات امنیتی */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">امنیت</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                رمز عبور فعلی
              </label>
              <input
                type="password"
                className="mt-1 w-full rounded-md border p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                رمز عبور جدید
              </label>
              <input
                type="password"
                className="mt-1 w-full rounded-md border p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                تکرار رمز عبور جدید
              </label>
              <input
                type="password"
                className="mt-1 w-full rounded-md border p-2"
              />
            </div>
            <button className="w-full rounded-md bg-blue-500 p-3 text-white">
              تغییر رمز عبور
            </button>
          </div>
        </div>

        {/* تنظیمات دو مرحله‌ای */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">احراز هویت دو مرحله‌ای</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">فعال کردن احراز هویت دو مرحله‌ای</p>
                <p className="text-sm text-gray-600">
                  برای امنیت بیشتر، ورود به حساب را با پیامک تایید کنید
                </p>
              </div>
              <button className="rounded-md bg-gray-100 px-4 py-2">
                فعال کردن
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">شماره موبایل</p>
                <p className="text-sm text-gray-600">0912****123</p>
              </div>
              <button className="rounded-md bg-gray-100 px-4 py-2">
                تغییر
              </button>
            </div>
          </div>
        </div>

        {/* تنظیمات اعلان‌ها */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">تنظیمات اعلان‌ها</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">اعلان‌های ایمیل</p>
                <p className="text-sm text-gray-600">
                  دریافت اخبار و تخفیف‌ها از طریق ایمیل
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">اعلان‌های پیامکی</p>
                <p className="text-sm text-gray-600">
                  دریافت اطلاع‌رسانی سفارش از طریق پیامک
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
              </label>
            </div>
          </div>
        </div>

        {/* تنظیمات حریم خصوصی */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">حریم خصوصی</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">نمایش وضعیت آنلاین</p>
                <p className="text-sm text-gray-600">
                  نمایش وضعیت آنلاین شما به سایر کاربران
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">نمایش تاریخچه سفارشات</p>
                <p className="text-sm text-gray-600">
                  نمایش تاریخچه سفارشات شما در پروفایل
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* حذف حساب */}
      <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-6">
        <h2 className="mb-4 text-xl font-semibold text-red-600">حذف حساب</h2>
        <p className="mb-4 text-sm text-gray-600">
          با حذف حساب کاربری، تمام اطلاعات شما از سیستم حذف خواهد شد و این
          عملیات قابل بازگشت نیست.
        </p>
        <button className="rounded-md bg-red-500 px-4 py-2 text-white">
          حذف حساب کاربری
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
