"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { showToast } from "@/components/common/Toast";
import ConfirmDeleteModal from "@/components/common/ConfirmDeleteModal";

const AllMiddleBanner = () => {
  // برای ذخیره لیست بنرها
  const [banners, setBanners] = useState([]);
  // برای ذخیره شماره صفحه فعلی
  const [currentPage, setCurrentPage] = useState(1);
  // برای ذخیره تعداد کل صفحات
  const [totalPages, setTotalPages] = useState(0);
  // برای نمایش وضعیت بارگذاری
  const [loading, setLoading] = useState(true);
  const [editingBanner, setEditingBanner] = useState(null);
  const [deletingBanner, setDeletingBanner] = useState(null); // حالت جدید برای مدیریت حذف
  const [isModalOpen, setIsModalOpen] = useState(false); // حالت برای نمایش مدال

  const fetchBanners = async (page) => {
    try {
      // شروع عملیات دریافت - نمایش لودینگ
      setLoading(true);

      // درخواست GET به سرور با شماره صفحه
      const response = await axios.get(
        `http://localhost:5000/api/middle-banner?page=${page}`,
      );

      // ذخیره داده‌های دریافتی
      setBanners(response.data.banners);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("خطا در دریافت بنرها:", error);
    } finally {
      // پایان عملیات - مخفی کردن لودینگ
      setLoading(false);
    }
  };

  // تغییر وضعیت فعال/غیرفعال
  const handleToggleStatus = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/middle-banner/toggle/${id}`,
      );
      if (response.data.success) {
        // به‌روزرسانی وضعیت در state
        setBanners(
          banners.map((banner) =>
            banner._id === id
              ? { ...banner, situation: !banner.situation }
              : banner,
          ),
        );
      }
    } catch (error) {
      console.error("خطا در تغییر وضعیت:", error);
    }
  };

  // ذخیره تغییرات ویرایش
  const handleSaveEdit = async (id, updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/middle-banner/${id}`,
        updatedData,
      );
      if (response.data.success) {
        // به‌روزرسانی بنر در state
        setBanners(
          banners.map((banner) =>
            banner._id === id ? { ...banner, ...updatedData } : banner,
          ),
        );
        setEditingBanner(null); // بستن فرم ویرایش
      }
    } catch (error) {
      console.error("خطا در ویرایش بنر:", error);
    }
  };

  // تابع تأیید حذف
  const confirmDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/middle-banner/${deletingBanner}`,
      );

      if (response.data.success) {
        // حذف بنر از state
        setBanners(banners.filter((banner) => banner._id !== deletingBanner));
        showToast.success("بنر با موفقیت حذف شد");
      }
    } catch (error) {
      showToast.error("خطا در حذف بنر");
      console.error("خطا در حذف بنر:", error);
    } finally {
      setDeletingBanner(null); // بازگشت به حالت اولیه
      setIsModalOpen(false); // بستن مدال
    }
  };

  useEffect(() => {
    fetchBanners(currentPage);
  }, [currentPage]);

  return (
    <div className="w-full">
      <h2 className="mb-6 text-xl font-bold">لیست بنرهای میانی</h2>

      {loading ? (
        <div className="text-center">در حال بارگذاری...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {banners.map((banner) => (
              <div
                key={banner._id}
                className="rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                {editingBanner === banner._id ? (
                  // فرم ویرایش
                  <EditForm
                    banner={banner}
                    onSave={(data) => handleSaveEdit(banner._id, data)}
                    onCancel={() => setEditingBanner(null)}
                  />
                ) : (
                  // نمایش عادی
                  <>
                    <div className="relative mb-4 h-40 w-full">
                      <Image
                        src={`/${banner.image}`}
                        alt={banner.imageAlt}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        متن جایگزین: {banner.imageAlt}
                      </p>
                      <p className="text-sm text-gray-600">
                        لینک: {banner.link}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <label className="relative inline-flex cursor-pointer items-center">
                            <input
                              type="checkbox"
                              checked={banner.situation}
                              onChange={() => handleToggleStatus(banner._id)}
                              className="peer sr-only"
                            />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                          </label>
                          <span className="text-sm text-gray-600">
                            {banner.situation ? "فعال" : "غیرفعال"}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingBanner(banner._id)}
                            className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
                          >
                            ویرایش
                          </button>
                          <button
                            onClick={() => {
                              setDeletingBanner(banner._id);
                              setIsModalOpen(true); // باز کردن مدال
                            }}
                            className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        تاریخ: {banner.date}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* بخش صفحه‌بندی */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`rounded-md px-4 py-2 ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </>
      )}

      {/* نمایش مدال تأیید حذف */}
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

// کامپوننت فرم ویرایش
const EditForm = ({ banner, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    image: banner.image,
    imageAlt: banner.imageAlt,
    link: banner.link,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          آدرس تصویر
        </label>
        <input
          type="text"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          متن جایگزین
        </label>
        <input
          type="text"
          value={formData.imageAlt}
          onChange={(e) =>
            setFormData({ ...formData, imageAlt: e.target.value })
          }
          className="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">لینک</label>
        <input
          type="text"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          className="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          انصراف
        </button>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
        >
          ذخیره
        </button>
      </div>
    </form>
  );
};

export default AllMiddleBanner;
