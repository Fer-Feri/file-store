import { useState } from "react";
import AllMiddleBanner from "./AllMiddleBanner";
import NewMiddleBanner from "./NewMiddleBanner";

const DashboardMiddleBanner = () => {
  const [activeButton, setActiveButton] = useState("all");

  const button = [
    { id: "all", title: "همه" },
    { id: "new", title: "جدید" },
  ];

  const renderContent = () => {
    switch (activeButton) {
      case "all":
        return <AllMiddleBanner />;
      case "new":
        return <NewMiddleBanner />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full">
      {/* title */}
      <div className="mb-6 flex w-full items-center justify-between">
        <h2 className="text-xl font-semibold">بنرهای تبلیغاتی</h2>
        <div className="flex gap-2">
          {button.map((btn, index) => (
            <button
              key={btn.id}
              onClick={() => setActiveButton(btn.id)}
              className={`rounded-md bg-blue-500 px-4 py-2 text-white ${index === 0 ? "bg-blue-500" : "bg-orange-500"}`}
            >
              {btn.title}
            </button>
          ))}
        </div>
      </div>
      {/* content */}
      <section className="w-full">{renderContent()}</section>
    </section>
  );
};

export default DashboardMiddleBanner;
