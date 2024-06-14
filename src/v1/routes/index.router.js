const express = require("express");
const router = express.Router();

router.get("/checkstatus", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
  });
});

router.get("/api/users", (req, res, next) => {
  res.status(200).json({
    status: "success api",
    message: "api ok",
    metadata: [
      {
        name: "cuongpham",
        age: 28,
      },
      {
        name: "Ronaldo",
        age: 40,
      },
      {
        name: "Messi",
        age: 38,
      },
    ],
  });
});

module.exports = router;
