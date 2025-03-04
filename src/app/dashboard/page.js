"use client";

import { useState } from "react";

import Management from "@/components/dashboard/Management";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardMiddleBanner from "@/components/dashboard/(middle-bnaer)/DashboardMiddleBanner";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("management");

  const renderContent = () => {
    switch (activeTab) {
      case "management":
        return <Management />;
      case "middle-banners":
        return <DashboardMiddleBanner />;

      case "slider":
        return (
          <div className="flex h-full items-center justify-center">
            <p className="text-lg text-gray-500">
              مدیریت اسلایدر به زودی اضافه خواهد شد
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="grid gap-6 md:grid-cols-[auto_1fr]">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="min-h-[calc(100vh-8rem)] w-full rounded-lg border bg-white p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
