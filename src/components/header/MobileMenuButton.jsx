"use client";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileMenuButton = ({ setIsOpenMenu }) => {
  return (
    <RxHamburgerMenu
      size={27}
      className="md:hidden"
      onClick={() => setIsOpenMenu(true)}
    />
  );
};

export default MobileMenuButton;
