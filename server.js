var express = require("express");
var fileupload = require("express-fileupload");
var path = require("path");
var cors = require("cors");

var bodyParser = require("body-parser");
var assignmentRoutes = require("./routes/Assignment");

var app = express();

var mongoose = require("mongoose");

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/assignment", assignmentRoutes);

//file upload initializer

app.use(fileupload());

app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
    }
    res.json({ fileNmae: file.name, filePath: `/uploads/${file.name}` });
  });
});

var corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
