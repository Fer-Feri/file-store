import Image from "next/image";
import Link from "next/link";

const Management = () => {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">داشبورد مدیریت</h1>
        <div className="flex gap-4">
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
            گزارش گیری
          </button>
          <button className="rounded-md bg-green-500 px-4 py-2 text-white">
            افزودن محصول
          </button>
        </div>
      </div>

      {/* آمار کلی */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-blue-50 p-6">
          <h3 className="text-sm font-medium text-blue-600">سفارشات جدید</h3>
          <p className="mt-2 text-2xl font-bold">12</p>
          <p className="mt-1 text-sm text-gray-600">+2 نسبت به دیروز</p>
        </div>
        <div className="rounded-lg bg-green-50 p-6">
          <h3 className="text-sm font-medium text-green-600">درآمد امروز</h3>
          <p className="mt-2 text-2xl font-bold">2,500,000 تومان</p>
          <p className="mt-1 text-sm text-gray-600">+15% نسبت به دیروز</p>
        </div>
        <div className="rounded-lg bg-orange-50 p-6">
          <h3 className="text-sm font-medium text-orange-600">بازدید امروز</h3>
          <p className="mt-2 text-2xl font-bold">1,234</p>
          <p className="mt-1 text-sm text-gray-600">+5% نسبت به دیروز</p>
        </div>
        <div className="rounded-lg bg-purple-50 p-6">
          <h3 className="text-sm font-medium text-purple-600">کاربران جدید</h3>
          <p className="mt-2 text-2xl font-bold">45</p>
          <p className="mt-1 text-sm text-gray-600">+8 نسبت به دیروز</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* آخرین سفارشات */}
        <div className="rounded-lg border p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">آخرین سفارشات</h2>
            <Link href="/admin/orders" className="text-sm text-blue-500">
              مشاهده همه
            </Link>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-md bg-gray-50 p-4">
              <div>
                <p className="font-medium">سفارش #1234</p>
                <p className="text-sm text-gray-600">تاریخ: 1402/12/25</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                  پرداخت شده
                </span>
                <button className="rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-600">
                  جزئیات
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-md bg-gray-50 p-4">
              <div>
                <p className="font-medium">سفارش #1233</p>
                <p className="text-sm text-gray-600">تاریخ: 1402/12/24</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-600">
                  در انتظار پرداخت
                </span>
                <button className="rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-600">
                  جزئیات
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* محصولات کم‌موجود */}
        <div className="rounded-lg border p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">محصولات کم‌موجود</h2>
            <Link href="/admin/products" className="text-sm text-blue-500">
              مشاهده همه
            </Link>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-md bg-gray-50 p-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16">
                  <Image
                    src="/product1.jpg"
                    alt="محصول"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">نام محصول</p>
                  <p className="text-sm text-gray-600">موجودی: 5 عدد</p>
                </div>
              </div>
              <button className="rounded-md bg-orange-100 px-3 py-1 text-sm text-orange-600">
                افزایش موجودی
              </button>
            </div>
            <div className="flex items-center justify-between rounded-md bg-gray-50 p-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16">
                  <Image
                    src="/product2.jpg"
                    alt="محصول"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">نام محصول</p>
                  <p className="text-sm text-gray-600">موجودی: 3 عدد</p>
                </div>
              </div>
              <button className="rounded-md bg-orange-100 px-3 py-1 text-sm text-orange-600">
                افزایش موجودی
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* نمودارها و آمار */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">فروش ماهانه</h2>
            <select className="rounded-md border p-2">
              <option>ماه جاری</option>
              <option>ماه گذشته</option>
              <option>3 ماه اخیر</option>
            </select>
          </div>
          <div className="h-64">
            {/* اینجا می‌توانید از کتابخانه‌های نمودار مثل Chart.js استفاده کنید */}
            <div className="flex h-full items-center justify-center text-gray-500">
              نمودار فروش ماهانه
            </div>
          </div>
        </div>
        <div className="rounded-lg border p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">محصولات بر اساس دسته‌بندی</h2>
            <select className="rounded-md border p-2">
              <option>همه دسته‌بندی‌ها</option>
              <option>دسته‌بندی 1</option>
              <option>دسته‌بندی 2</option>
            </select>
          </div>
          <div className="h-64">
            {/* اینجا می‌توانید از کتابخانه‌های نمودار مثل Chart.js استفاده کنید */}
            <div className="flex h-full items-center justify-center text-gray-500">
              نمودار دسته‌بندی محصولات
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Management;
