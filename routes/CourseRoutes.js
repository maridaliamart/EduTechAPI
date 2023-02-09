const express = require("express");
const router = express.Router();
const { Course, User, Branch } = require("../models/index");


// GET all Courses //
router.get("/", async (req, res) => {
  const course = await Course.findAll();
  res.json(course);
});


// GET courses of a particular branch //
router.get("/branches/:branch", async (req, res) => {
  const branch = await Course.findAll({
    where: {
      branch: req.params.branch,
    },
  });

  res.json(branch);
});

router.post("/", async (req,res) => {
    try {
        await Course.create({
            ...req.body
        })
        
        const findAll = await Course.findAll();
        res.json(findAll);
    } catch (error) {
        console.log(error)
    }

})

// // PUT update duration of the course //
router.put("/:id", async (req, res) => {
  
  const courseToFind = await Course.findByPk(req.params.courseId);
  courseToFind.update({ ...req.body });
  console.log("testing", req.body);
  res.json(courseToFind);
  
});



// DELETE a course //
router.delete("/:id", async (req, res) => {
  const coursedelete = await Course.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(await Course.findAll());
});

module.exports = router;