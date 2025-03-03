"use client";

const SearchPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">نتایج جستجو</h1>

      {/* فیلترها */}
      <div className="mb-6 flex flex-wrap gap-4">
        <button className="rounded-full bg-blue-500 px-4 py-2 text-white">
          همه
        </button>
        <button className="rounded-full bg-gray-200 px-4 py-2">محصولات</button>
        <button className="rounded-full bg-gray-200 px-4 py-2">مقالات</button>
      </div>

      {/* نتایج جستجو */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* نمونه نتیجه */}
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">عنوان نتیجه جستجو</h3>
          <p className="mt-2 text-gray-600">
            توضیحات مختصر درباره نتیجه جستجو...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
