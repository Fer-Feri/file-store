/** @format */

const express = require("express");
const router = express();

const middleBannerCtrl = require("../controllers/MiddleBannerCtrl");

router.get("/middle-banner", middleBannerCtrl.getAllMiddleBanner);
router.post("/new-middle-banner", middleBannerCtrl.newMiddleBanner);
router.patch("/middle-banner/toggle/:id", middleBannerCtrl.toggleBannerStatus);
router.put("/middle-banner/:id", middleBannerCtrl.updateBanner);
router.delete("/middle-banner/:id", middleBannerCtrl.deleteBanner);

module.exports = router;
