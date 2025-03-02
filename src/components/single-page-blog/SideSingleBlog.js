"use client";

import SearchInput from "../header/SearchInput";
import { Badge } from "../ui/badge";
import Link from "next/link";

// داده‌های نمونه
const tags = [
  { id: 1, name: "برچسب یک", slug: "tag-1" },
  { id: 2, name: "برچسب دو", slug: "tag-2" },
  { id: 3, name: "برچسب سه", slug: "tag-3" },
];

const articles = [
  { id: 1, title: "مقاله یک", slug: "article-1" },
  { id: 2, title: "مقاله دو", slug: "article-2" },
  { id: 3, title: "مقاله سه", slug: "article-3" },
];

const products = [
  { id: 1, title: "محصول یک", slug: "product-1" },
  { id: 2, title: "محصول دو", slug: "product-2" },
  { id: 3, title: "محصول سه", slug: "product-3" },
];

const SideSingleBlog = () => {
  return (
    <>
      <div className="max-w-[25%] max-md:max-w-full space-y-6 px-2 py-6">
        <SearchInput />
        {/* توضیحات خلاصه */}
        <div className="flex flex-col gap-2 rounded-xs border-2 p-2 shadow-xl">
          <h3 className="font-bold text-blue-500">توضیحات خلاصه</h3>
          <p className="text-sm text-gray-500">
            توضیحات خلاصه توضیحات خلاصه توضیحات خلاصه توضیحات خلاصه توضیحات
            خلاصه توضیحات خلاصه توضیحات خلاصه توضیحات خلاصه توضیحات خلاصه
            توضیحات خلاصه توضیحات خلاصه توضیحات خلاصه
          </p>
        </div>

        {/* برچسب ها */}
        <div className="flex flex-col gap-2 rounded-xs border-2 p-2 shadow-xl">
          <h3 className="font-bold text-blue-500">برچسب‌ها</h3>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/tags/${tag.slug}`}
                className="no-underline"
              >
                <Badge
                  variant="white"
                  className="cursor-pointer px-2 py-1.5 text-sm transition-colors hover:bg-gray-200"
                >
                  # {tag.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        {/*  مقاله */}
        <div className="flex flex-col gap-2 space-y-2.5 rounded-xs border-2 p-2 shadow-xl">
          <h3 className="font-bold text-blue-500">پربازدیدترین مقالات</h3>
          <div className="flex flex-col gap-4">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="text-inherit no-underline"
              >
                <p className="line-clamp-2 cursor-pointer border-r border-slate-800 px-1 text-wrap break-words transition-colors hover:text-blue-500">
                  {article.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/*  محصولات */}
        <div className="flex flex-col gap-2 space-y-2.5 rounded-xs border-2 p-2 shadow-xl">
          <h3 className="font-bold text-blue-500">پرفروش‌ترین محصولات</h3>
          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="text-inherit no-underline"
              >
                <p className="line-clamp-2 cursor-pointer border-r border-slate-800 px-1 text-wrap break-words transition-colors hover:text-blue-500">
                  {product.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSingleBlog;
