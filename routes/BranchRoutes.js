const express = require("express");
const router = express.Router();
const { Branch } = require("../models/index");


// GET courses of a particular branch //
router.get("/courses/:course", async (req, res) => {
    const course = await Branch.findAll({
      where: {
        course: req.params.course,
      },
    });
    res.json(course);
  });

module.exports = router;