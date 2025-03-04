"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { showToast } from "@/components/common/Toast";

const NewMiddleBanner = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      // ارسال داده به سرور
      const url = "http://localhost:5000/api/new-middle-banner";
      console.log("ارسال داده:", data); // برای بررسی داده‌های ارسالی

      const response = await axios.post(url, data);
      console.log("پاسخ سرور:", response.data); // برای بررسی پاسخ سرور

      // پاک کردن فرم بعد از ارسال موفق
      reset();
      showToast.success("بنر با موفقیت اضافه شد");
    } catch (error) {
      console.error("خطا در ثبت بنر:", error.response?.data || error.message);
      showToast.error(error.response?.data?.message || "خطا در ثبت بنر");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <p className="mb-9 rounded-md bg-red-400 p-2 text-slate-800">
        ثبت بنر جدید
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* آدرس عکس */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            آدرس عکس
          </label>
          <input
            type="text"
            {...register("image", {
              required: "لطفا آدرس عکس را وارد کنید",
            })}
            className="w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
          />
          {errors.image && (
            <p className="mt-1 text-sm text-red-500">{errors.image.message}</p>
          )}
        </div>

        {/* آلت عکس */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            متن جایگزین عکس
          </label>
          <input
            type="text"
            {...register("imageAlt", {
              required: "لطفا متن جایگزین عکس را وارد کنید",
            })}
            className="w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
          />
          {errors.imageAlt && (
            <p className="mt-1 text-sm text-red-500">
              {errors.imageAlt.message}
            </p>
          )}
        </div>

        {/* لینک عکس */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            لینک عکس
          </label>
          <input
            type="url"
            {...register("link", {
              required: "لطفا لینک عکس را وارد کنید",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message: "لطفا یک آدرس معتبر وارد کنید",
              },
            })}
            className="w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
          />
          {errors.link && (
            <p className="mt-1 text-sm text-red-500">{errors.link.message}</p>
          )}
        </div>

        {/* وضعیت فعال بودن */}
        <div className="flex items-center gap-2">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              {...register("situation")}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
          <span className="text-sm font-medium text-gray-700">
            فعال کردن بنر
          </span>
        </div>

        {/* دکمه ثبت */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isLoading ? "در حال ثبت..." : "ثبت بنر"}
        </button>
      </form>
    </div>
  );
};

export default NewMiddleBanner;
