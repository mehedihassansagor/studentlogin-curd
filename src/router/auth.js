const express = require("express");
const router = express.Router();

const Student = require("../models/student");

router.get("/", (req, res) => {
  res.send("this is me from auth");
});

//post

router.post("/studentInfo", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    console.log(createUser);
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//get data
router.get("/studentInfo", async (req, res) => {
  try {
    const studentData = await Student.find();
    res.send(studentData);
    console.log(studentData);
  } catch (err) {
    res.send(err);
  }
});

// DELETE;
router.delete("/studentInfo/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id);
    if (!deleteStudent) {
      return res.status(400).send();
    }
    res.send(deleteStudent);
    console.log("deletete", deleteStudent);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
