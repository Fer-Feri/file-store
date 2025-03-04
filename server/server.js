/** @format */

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookiesParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//security
const helmet = require("helmet");
const xssClean = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  }),
);
app.use(cookiesParser());
app.use(cors());
app.use(helmet());
app.use(xssClean());
app.use(mongoSanitize());
app.use(hpp());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Connect DATABASE File Store" });
});

//ROUTES
const middleBannerRoute = require("./routes/MiddleBannerRoute");

//ROUTES MIDDLEWARE
app.use("/api", middleBannerRoute);

const DATABASE_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

module.exports = app;

// mongoose
//   .connect(DATABASE_URL)
//   .then((data) => {
//     app.listen(PORT);
//   })
//   .catch((err) => console.log(err));
