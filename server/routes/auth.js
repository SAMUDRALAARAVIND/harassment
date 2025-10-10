const { Router } = require("express");
const { emailRegex } = require("../utils/regex");
const { sendOtp } = require("../services/authservice");

const router = Router();

router.post("/otp/send", (req, res) => {
  const email = req.body.email;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }
  sendOtp(email, res);
});

module.exports = router;
