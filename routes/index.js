const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
  // res.json({message: "Hello World"})
});

module.exports = router;
