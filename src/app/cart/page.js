"use client";

import Image from "next/image";

const CartPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">سبد خرید</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {/* لیست محصولات */}
        <div className="md:col-span-2">
          <div className="space-y-4">
            {/* نمونه محصول */}
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="relative h-24 w-24">
                <Image
                  src="/product.jpg"
                  alt="محصول"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">نام محصول</h3>
                <p className="text-gray-600">120,000 تومان</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-full bg-gray-200 p-2">-</button>
                <span>1</span>
                <button className="rounded-full bg-gray-200 p-2">+</button>
              </div>
            </div>
          </div>
        </div>

        {/* خلاصه سفارش */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">خلاصه سفارش</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>جمع کل</span>
              <span>120,000 تومان</span>
            </div>
            <div className="flex justify-between">
              <span>تخفیف</span>
              <span>0 تومان</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between font-bold">
                <span>مبلغ نهایی</span>
                <span>120,000 تومان</span>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 p-3 text-white">
            نهایی کردن خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
