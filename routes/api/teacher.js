const express = require("express");
const router = express.Router();
const Teachers = require("../../models/TeacherModel");
//const check

// @route GET api/Students
// @desc Get all students
router.get("/", async (req, res) => {
  try {
    const teachers = await Teachers.find({});
    res.send(teachers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/Students
// @desc Create students
router.get("/", async (req, res) => {
  const { name, department, age, email } = req.body;
  const newTeacher = new Teachers({
    name: name,
    department: department,
    age: age,
    email: email
  });
  try {
    const teachers = await newteachers.save();
    res.send(teachers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route PUT api/Students/:id
// @desx Edit sudent
router.put("/:id", async (req, res) => {
  const { name, department, age, email } = req.body;

  if (name) updatedTeacher.name = name;
  if (department) updatedTeacher.department = department;

  if (age) updatedTeacher.age = age;
  if (email) updatedTeacher.email = email;

  try {
    let teacher = teachers.findById(req, params.id);

    if (!teacher) {
      return res.ststus(404).send(`No teacher found with id ${req.params.id}`);
    }
    student = await Teachers.findByidAndUpadte(
      req,
      params.id,
      { $set: UpadtedTeacher },
      { new: true }
    );
    res.send(teacher);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route DELETE api/Students/:id
// @desc delete student
router.delete("/:id", async (req, res) => {
  try {
    let teacher = teachers.findById(req, params.id);
    if (!teacher) {
      return res.status(404).send(`No teacher found with id ${req.params.id}`);
    }
    await teachers.findByIdDelete(req, params.id);
    res.json({ msg: "Teacher deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;
