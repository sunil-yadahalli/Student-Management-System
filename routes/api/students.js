const express = require("express");
const router = express.Router();
const Students = require("../../models/StudentModel");
//const check

// @route GET api/Students
// @desc Get all students
router.get("/", async (req, res) => {
  try {
    const student = await Students.find({});
    res.send(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
//@route GET api/Students
//desc GET all students
router.get("/:id", async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    res.send(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/Students
// @desc POST students
router.post("/", async (req, res) => {
  const { name, age, email } = req.body;
  const newStudent = new Students({
    name: name,
    age: age,
    email: email
  });
  try {
    const student = await newStudent.save();
    res.send(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route PUT api/Student/:id
// @desc EDIT sudent
router.put("/:id", async (req, res) => {
  const { name, age, email } = req.body;
  const updatedStudent = {};
  if (name) updatedStudent.name = name;
  if (age) updatedStudent.age = age;
  if (email) updatedStudent.email = email;

  try {
    let student = Students.findById(req.params.id);

    if (!student) {
      return res.status(404).send(`No student found with is ${req.params.id}`);
    }
    student = await Students.findByIdAndUpdate(
      req.params.id,
      { $set: UpdatedStudent },
      { new: true }
    );
    res.send(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route DELETE api/Students/:id
// @desc delete student
router.delete("/:id", async (req, res) => {
  try {
    let student = Students.findById(req.params.id);
    if (!student) {
      return res.status(404).send(`No student found with is ${req.params.id}`);
    }
    await Students.findByIdAndDelete(req.params.id);
    res.json({ msg: "Student deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;
