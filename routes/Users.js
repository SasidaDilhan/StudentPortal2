const express = require("express");

//creating application end points
const users = express.Router();

//sharing resource
const cors = require("cors");

//information securely sharing
const jwt = require("jsonwebtoken");

//password hashing
const bcrypt = require("bcrypt");

//for creating user model
const User = require("../models/User");

//using cors
users.use(cors());

process.env.SECRET_KEY = "secret";

//register new user
users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
  };

  //find user if not registered user new user registration
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then((user) => {
              res.json({ status: user.email + "registered" });
            })
            .catch((err) => {
              res.send("err" + err);
            });
        });
      } else {
        res.json({ error: "User already registered" });
      }
    })
    .catch((err) => {
      res.send("error" + err);
    });
});

//login
users.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
    }
  });
});
