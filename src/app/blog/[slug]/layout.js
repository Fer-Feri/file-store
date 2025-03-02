/** @format */
// import { shabnam } from "@/fonts/fonts";
// import "./globals.css";
// import Header from "@/components/header/Header";
// import Footer from "@/components/footer/Footer";

// export const metadata = {
//   title: "File Store",
//   description:
//     "فروشگاه File Store یک پلتفرم آنلاین برای خرید و فروش فایل‌های دیجیتالی است. کاربران می‌توانند انواع فایل‌ها از جمله اسناد، تصاویر، ویدئوها، قالب‌های طراحی، کدهای برنامه‌نویسی و سایر محتوای دیجیتال را خریداری یا به فروش برسانند.",
//   icons: "/fav-icon.png",
// };

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
