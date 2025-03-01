/** @format */

import CategoryGraphic from "@/components/ctegory-graphic/CategoryGraphic";
import Footer from "@/components/footer/Footer";
import GraphicSlider from "@/components/graphic-slider/GraphicSlider";
import HeroSlider from "@/components/hero-slider/HeroSlider";
import LatestArticle from "@/components/latest-article/LatestArticle";
import MiddleBanner from "@/components/middle-banner/MiddleBanner";
import ProductSlider from "@/components/product-slider/ProductSlider";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <ProductSlider title="اپلیکیشن‌ها" linkCom="app" />
      <MiddleBanner />
      <ProductSlider title="کتاب‌ها" linkCom="books" />
      <CategoryGraphic />
      <GraphicSlider title="فایل‌های گرافیکی" linkCom="graphic" />
      <LatestArticle title="آخرین مقالات" />
      <Footer />
    </>
  );
};

export default HomePage;
