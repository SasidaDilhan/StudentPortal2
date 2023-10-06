const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Assignment = new Schema(
  {
    course: {
      type: "string",
    },

    assignment_name: {
      type: "string",
    },

    deadline: {
      type: "string",
    },
  },
  {
    collation: "assgnment",
  }
);

module.exports = mongoose.model("Assignment", Assignment);
