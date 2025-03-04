const MiddleBannerModel = require("../models/MiddleBannerModel"); // وارد کردن مدل بنر میانی

const getAllMiddleBanner = async (req, res) => {
  try {
    // دریافت شماره صفحه از پارامترهای URL. اگر نبود، صفحه 1 در نظر گرفته می‌شود
    const page = parseInt(req.query.page) || 1;
    const limit = 4; // تعداد بنرها در هر صفحه (2 تا)
    const skip = (page - 1) * limit; // محاسبه تعداد آیتم‌هایی که باید رد شوند

    // شمارش کل بنرهای موجود در دیتابیس
    const totalBanners = await MiddleBannerModel.countDocuments();
    // محاسبه تعداد کل صفحات (مثلاً اگر 5 بنر داریم، با limit=2، می‌شود 3 صفحه)
    const totalPages = Math.ceil(totalBanners / limit);

    // دریافت بنرها از دیتابیس با:
    const banners = await MiddleBannerModel.find()
      .sort({ _id: -1 }) // مرتب‌سازی نزولی بر اساس تاریخ (جدیدترین‌ها اول)
      .skip(skip) // رد کردن تعداد مشخصی از نتایج برای صفحه‌بندی
      .limit(limit); // محدود کردن تعداد نتایج به 2 تا

    // ارسال پاسخ به کلاینت
    res.status(200).json({
      banners, // آرایه بنرها
      currentPage: page, // شماره صفحه فعلی
      totalPages, // تعداد کل صفحات
      totalBanners, // تعداد کل بنرها
    });
  } catch (error) {
    // در صورت بروز خطا، ارسال پیام خطا
    res.status(400).json({ msg: error.message });
  }
};

// تابع ایجاد بنر جدید
const newMiddleBanner = async (req, res) => {
  try {
    // ایجاد یک نمونه جدید از مدل بنر با داده‌های دریافتی
    const newMiddleBanner = new MiddleBannerModel({
      image: req.body.image, // آدرس تصویر
      imageAlt: req.body.imageAlt, // متن جایگزین تصویر
      situation: req.body.situation, // وضعیت فعال/غیرفعال
      link: req.body.link, // لینک بنر
      date: new Date().toLocaleDateString("fa-IR", {
        // تاریخ به فرمت فارسی
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    // ذخیره بنر در دیتابیس
    newMiddleBanner
      .save()
      .then((data) =>
        // در صورت موفقیت، ارسال پیام موفقیت
        res.status(200).json({ msg: "بنر میانی با موفقیت ذخیره شد" }),
      )
      .catch((error) => {
        // در صورت خطا در ذخیره‌سازی
        console.log(error);
        res.status(400).json({ msg: "مشکلی در ذخیره بنر میانی وجود دارد" });
      });
  } catch (error) {
    // در صورت بروز خطا در کل فرآیند
    res.status(400).json({ msg: error.message });
  }
};

// تغییر وضعیت فعال/غیرفعال
const toggleBannerStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await MiddleBannerModel.findById(id);
    banner.situation = !banner.situation;
    await banner.save();

    res.status(200).json({
      success: true,
      message: "وضعیت بنر با موفقیت تغییر کرد",
      situation: banner.situation,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// به‌روزرسانی بنر
const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const banner = await MiddleBannerModel.findByIdAndUpdate(id, updates, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "بنر با موفقیت به‌روزرسانی شد",
      banner,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// اضافه کردن متد حذف
const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    await MiddleBannerModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "بنر با موفقیت حذف شد",
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// صادر کردن توابع برای استفاده در سایر فایل‌ها
module.exports = {
  getAllMiddleBanner,
  newMiddleBanner,
  toggleBannerStatus,
  updateBanner,
  deleteBanner,
};
