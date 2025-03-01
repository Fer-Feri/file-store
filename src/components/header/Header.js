/** @format */
"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import SearchInput from "./SearchInput";
import MenuLinks from "./MenuLinks";
// import MobileMenuWrapper from "./MobileMenuWrapper";

const BasketUserIcons = dynamic(() => import("./BasketUserIcons"), {
  ssr: false,
});

const MobileMenuWrapper = dynamic(() => import("./MobileMenuWrapper"), {
  ssr: false,
});

const Header = () => {
  return (
    <header className="container mx-auto flex max-w-7xl items-center gap-3 px-2 py-3">
      {/*//? SEARCH-&-BADGE-&-BASKET*/}
      <div className="flex grow flex-col gap-3 overflow-hidden">
        <div className="flex items-center justify-between gap-6 md:justify-start">
          {/*//!  Logo */}
          <Logo />
          {/*//! LINKS-CONTACT */}
          <MenuLinks />
          <LogoMobile />
          <Contact />
          <MobileMenuWrapper />
        </div>
        {/*//! SEARCH-BASKET */}
        <div className="flex items-center gap-3 max-md:justify-center">
          {/* input */}
          <SearchInput />
          {/* icons */}
          <BasketUserIcons />
        </div>
      </div>
    </header>
  );
};

export default Header;

const Logo = () => {
  return (
    <div className="w-[60px]">
      <Image
        src="/logo.png"
        width={200}
        height={200}
        priority={true}
        alt="logo"
      />
    </div>
  );
};

const LogoMobile = () => {
  return (
    <div className="md:hidden">
      <Image
        src="/logo-mobile.png"
        width={200}
        height={200}
        priority={true}
        alt="logo"
      />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col items-end gap-2 max-lg:hidden">
      <div className="flex items-center gap-2">
        <span>09189800167</span>
        <FiPhone size={35} className="-rotate-12 rounded-lg bg-gray-300 p-2" />
      </div>
      <div className="flex items-center gap-2">
        <span>fsrshad.bahari.33@gmail.com</span>
        <GoMail size={36} className="-rotate-12 rounded-lg bg-gray-300 p-2" />
      </div>
    </div>
  );
};
