/** @format */

const mongoose = require("mongoose");

const MiddleBannerModel = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  situation: {
    type: Boolean,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: new Date().toLocaleDateString("fa-IR", { hour: "2-digit", minute: "2-digit" }),
  },
});

module.exports = mongoose.model("MiddleBanner", MiddleBannerModel);
