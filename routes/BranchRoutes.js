const express = require("express");
const router = express.Router();
const { Branch } = require("../models/index");


// GET courses of a particular branch //

router.get("/", async (req, res) => {
  const branch = await Branch.findAll();
  res.json(branch);
});

router.get("/courses/:course", async (req, res) => {
    const course = await Branch.findAll({
      where: {
        course: req.params.course,
      },
    });
    res.json(course);
  });

module.exports = router;