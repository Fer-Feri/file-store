import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";

import { CiBookmarkPlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdFormatColorFill } from "react-icons/md";
import { IoIosResize } from "react-icons/io";
import { FaCopy } from "react-icons/fa";

const GraphicBox = () => {
  return (
    <Card className="flex w-[300px] shrink-0">
      <CardHeader>
        <Image
          src={"/product-slider/product-slider-img.jpg"}
          alt="product-slider"
          className="mx-auto"
          width={300}
          height={100}
          priority
        />
        <CardTitle className="mt-2 w-full text-xl text-wrap break-words">
          رمان ارباب حلقه‌ها
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/*  */}
        <div className="mb-14 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1">
              <MdFormatColorFill />
              <span className="">فرمت</span>
            </p>
            <p>PSD</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1">
              <IoIosResize />
              <span className="">اندازه</span>
            </p>
            <p>200*100پیکسل</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1">
              <FaCopy />
              <span className="">حجم</span>
            </p>
            <p>10مگ</p>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-1">
          <Badge className="bg-gray-300 px-2 py-1 text-[14px] text-slate-900">
            رمان
          </Badge>
          <Badge className="bg-gray-300 px-2 py-1 text-[14px] text-slate-900">
            داستان
          </Badge>
          <Badge className="bg-gray-300 px-2 py-1 text-[14px] text-slate-900">
            تالکین
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="mt-10 flex items-center justify-between p-0">
        <div className="mr-1 flex items-center gap-2 text-2xl">
          <CiBookmarkPlus className="cursor-pointer" />
          <CiSearch className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <MdShoppingCartCheckout className="cursor-pointer" />
          <Badge className="mr-auto rounded-l-none bg-gray-300 py-1 text-[15px] text-slate-900">
            60،000 تومان
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GraphicBox;
