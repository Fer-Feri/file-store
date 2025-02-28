/** @format */

import HeroSlider from "@/components/hero-slider/HeroSlider";
import MiddleBanner from "@/components/middle-banner/MiddleBanner";
import ProductSlider from "@/components/product-slider/ProductSlider";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <ProductSlider title="اپلیکیشن‌ها" linkCom="app" />
      <MiddleBanner />
      <ProductSlider title="کتاب‌ها" linkCom="books" />
    </>
  );
};

export default HomePage;
