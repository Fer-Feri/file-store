/** @format */
import { shabnam } from "@/fonts/fonts";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "File Store",
  description:
    "فروشگاه File Store یک پلتفرم آنلاین برای خرید و فروش فایل‌های دیجیتالی است. کاربران می‌توانند انواع فایل‌ها از جمله اسناد، تصاویر، ویدئوها، قالب‌های طراحی، کدهای برنامه‌نویسی و سایر محتوای دیجیتال را خریداری یا به فروش برسانند.",
  icons: "/fav-icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={shabnam.variable}>
        <div className="mx-auto">
          <Header />
          {children}
        </div>
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            className: shabnam.variable,
            style: {
              fontFamily: "var(--font-shabnam)",
              background: "#333",
              color: "#fff",
              fontSize: "1.2rem",
              padding: "16px",
              maxWidth: "400px",
            },
          }}
        />
      </body>
    </html>
  );
}
