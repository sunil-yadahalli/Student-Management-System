const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    require: true,
    Unique: true
  }
});

module.exports = mongoose.model("student", StudentSchema);
