const express = require("express");
const assignmentRoutes = express.Router();

let Assignment = require("../models/Assignment");
const app = express();

assignmentRoutes.route("/add").post(function (req, res) {
  let assignment = new Assignment(req.body);
  assignment
    .save()
    .then((assignment) => {
      res.status(200).json({ assignment: "assignment added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save");
    });
});

// assignmentRoutes.route("/").get(function (req, res) {
//   Assignment.find(function (err, assignment) {
//     if (err) {
//       console.log(err);
//       console.log("methana aula");
//     } else {
//       res.json(assignment);
//     }
//   });
// });
app.get("/assignment", (req, res) => {
  Assignment.find({}) // Use the promise-based .exec() method
    .exec()
    .then((assignments) => {
      res.json(assignments);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

assignmentRoutes.route("/delete/:id").get(function (req, res) {
  Assignment.findByIdAndRemove(
    {
      _id: req.params.id,
    },
    function (err, assgnment) {
      if (err) res.json(err);
      else res.json("successfully deleted");
    }
  );
});

module.exports = assignmentRoutes;
