import { Button } from "../ui/button";
import Link from "next/link";

const MenuLinks = () => {
  return (
    <div className="no-scrollbar flex grow gap-2 justify-self-end overflow-auto max-md:hidden">
      <Button asChild variant="white">
        <Link href="/" className="max-md:text-[16px]">
          خانه
        </Link>
      </Button>
      <Button asChild variant="white">
        <Link href="/" className="max-md:text-[16px]">
          فروشگاه
        </Link>
      </Button>
      <Button asChild variant="white">
        <Link href="/" className="max-md:text-[16px]">
          فروشگاه
        </Link>
      </Button>
      <Button asChild variant="white">
        <Link href="/" className="max-md:text-[16px]">
          فروشگاه
        </Link>
      </Button>
      <Button asChild variant="white">
        <Link href="/" className="max-md:text-[16px]">
          وبلاگ
        </Link>
      </Button>
    </div>
  );
};

export default MenuLinks;
