"use client";

import AccountSidebar from "@/components/account/AccountSidebar";

const ProfilePage = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="grid gap-6 md:grid-cols-4">
        <AccountSidebar />
        <div className="md:col-span-3">
          <h1 className="mb-8 text-2xl font-bold">پروفایل کاربری</h1>

          <div className="grid gap-6 md:grid-cols-2">
            {/* اطلاعات شخصی */}
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">اطلاعات شخصی</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    نام کاربری
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    شماره موبایل
                  </label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-md border p-2"
                  />
                </div>
              </div>
            </div>

            {/* سفارشات */}
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">سفارشات اخیر</h2>
              <div className="space-y-4">
                <div className="rounded-md bg-gray-50 p-4">
                  <p className="font-medium">سفارش #1234</p>
                  <p className="text-sm text-gray-600">تاریخ: 1402/12/25</p>
                  <p className="text-sm text-gray-600">وضعیت: در حال پردازش</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
