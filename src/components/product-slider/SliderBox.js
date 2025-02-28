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

const SliderBox = () => {
  return (
    <Card className="flex max-w-[350px] shrink-0">
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
      <CardContent className="flex gap-1">
        <Badge className="bg-gray-300 px-2 py-1 text-[14px] text-slate-900">
          رمان
        </Badge>
        <Badge className="bg-gray-300 px-2 py-1 text-[14px] text-slate-900">
          داستان
        </Badge>
        <Badge className="bg-gray-300 px-2 py-1 text-[14px] text-slate-900">
          تالکین
        </Badge>
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

export default SliderBox;
