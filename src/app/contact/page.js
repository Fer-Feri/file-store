"use client";

const ContactPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">تماس با ما</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* فرم تماس */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">فرم تماس</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                نام
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ایمیل
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                پیام
              </label>
              <textarea
                className="mt-1 w-full rounded-md border p-2"
                rows="4"
              ></textarea>
            </div>
            <button className="w-full rounded-md bg-blue-500 p-3 text-white">
              ارسال پیام
            </button>
          </form>
        </div>

        {/* اطلاعات تماس */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">اطلاعات تماس</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">آدرس:</span>
              <span>تهران، خیابان ولیعصر</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">تلفن:</span>
              <span>021-12345678</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">ایمیل:</span>
              <span>info@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
