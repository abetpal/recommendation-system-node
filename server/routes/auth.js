const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

// Todo: Complete Signup

router.post("/signup", (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    username,
    address,
    city,
    state,
    pincode,
    contact_number,
  } = req.body;
  console.log(req.body);
  if (
    !first_name ||
    !last_name ||
    !email ||
    !password ||
    !username ||
    !address ||
    !city ||
    !state ||
    !pincode ||
    !contact_number
  ) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that email" });
      }
      const user = new User({
        first_name,
        last_name,
        email,
        password,
        username,
        address,
        city,
        state,
        pincode,
        contact_number,
      });
      user
        .save()
        .then((user) => {
          res.json({ message: "saved successfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
