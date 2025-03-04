"use client";

import toast from "react-hot-toast";

export const showToast = {
  // برای پیام‌های موفقیت
  success: (message) => {
    toast.success(message, {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
        fontFamily: "var(--font-shabnam)",
        padding: "16px",
        borderRadius: "8px",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#10B981",
      },
    });
  },

  // برای پیام‌های خطا
  error: (message) => {
    toast.error(message, {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#EF4444",
        color: "#fff",
        fontFamily: "var(--font-shabnam)",
        padding: "16px",
        borderRadius: "8px",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#EF4444",
      },
    });
  },

  // برای پیام‌های اطلاع‌رسانی
  info: (message) => {
    toast(message, {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#3B82F6",
        color: "#fff",
        fontFamily: "var(--font-shabnam)",
        padding: "16px",
        borderRadius: "8px",
      },
      icon: "ℹ️",
    });
  },

  // برای پیام‌های هشدار
  warning: (message) => {
    toast(message, {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#F59E0B",
        color: "#fff",
        fontFamily: "var(--font-shabnam)",
        padding: "16px",
        borderRadius: "8px",
      },
      icon: "⚠️",
    });
  },
};
