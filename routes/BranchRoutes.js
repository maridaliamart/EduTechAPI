const express = require("express");
const router = express.Router();
const { Branch, Course } = require("../models/index");


// GET courses of a particular branch //

router.get("/", async (req, res) => {
  const branch = await Branch.findAll();
  res.json(branch);
});

router.get("/:id/courses", async (req, res) => {
    const course = await Branch.findAll({
      include: [{
        model: Course,
        as: 'courses'
      }],
      where: {
        id: req.params.id
      }
    });
    res.json(course);
  });

module.exports = router;