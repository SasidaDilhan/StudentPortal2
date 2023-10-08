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
              res.json({ status: user.email + " registered" });
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
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440, //methanadi wenne user log wela wedk nokara 1440 ka kalayak hitiyama cookie ek ain wela uw logout wenawa wage wedk
          });
          res.send(token);
          res.json({ status: user.first_name + " Welcome!!" });
        } else {
          res.json({ error: "user does not exists in the system" });
        }
      } else {
        res.json({ error: "user does not exists in the system" });
      }
    })
    .catch((err) => {
      res.send("error" + err);
    });
});

//userge profile ek get ekin gnna ona ekt user log wela inn ona ona uta session ekk genarate wela tynna on jwt ek authenticate wela tynna ona
users.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send("user does not exsist");
      }
    })
    .catch((err) => {
      res.send("error" + err);
    });
});

module.exports = users;
