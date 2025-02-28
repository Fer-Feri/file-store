/** @format */

import localFont from "next/font/local";

export const shabnam = localFont({
  src: [
    { path: "../fonts/Shabnam-Light-WOL.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Shabnam-WOL.woff", weight: "400", style: "normal" },
    { path: "../fonts/Shabnam-Bold-WOL.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-shabnam",
});
