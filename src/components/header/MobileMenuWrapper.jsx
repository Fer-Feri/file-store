"use client";
import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import MenuMobile from "./MenuMobile";

const MobileMenuWrapper = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <MobileMenuButton setIsOpenMenu={setIsOpenMenu} />
      <MenuMobile setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
    </>
  );
};

export default MobileMenuWrapper;
