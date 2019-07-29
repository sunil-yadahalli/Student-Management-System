const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = Schema({
  name: {
    type: String,
    require: true
  },
  department: {
    type: String
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

module.exports = mongoose.model("teacher", TeacherSchema);
