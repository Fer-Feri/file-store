import { Button } from "../ui/button";
import Link from "next/link";
import { MENU_ITEMS } from "@/constants/menuItems";

const MenuLinks = () => {
  return (
    <div className="no-scrollbar flex grow gap-2 justify-self-end overflow-auto max-md:hidden">
      {MENU_ITEMS.map((item) => (
        <Button key={item.title} asChild variant="white">
          <Link href={item.href} className="max-md:text-[16px]">
            {item.title}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default MenuLinks;
