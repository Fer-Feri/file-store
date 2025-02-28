"use client";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
const SearchInput = () => {
  return (
    <div className="relative flex grow items-center">
      <Input
        type="search"
        placeholder="جستجو کنید..."
        className="h-12 focus-visible:shadow-none focus-visible:ring-0"
      />
      <LuSearch className="absolute left-0 ml-2" />
    </div>
  );
};

export default SearchInput;
