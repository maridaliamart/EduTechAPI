const express = require("express");
const router = express.Router();
const { Course, User, Branch } = require("../models/index");


// GET all Courses //
router.get("/", async (req, res) => {
  const course = await Course.findAll();
  res.json(course);
});


// GET branches of a particular course //
router.get("/:id/branch", async (req, res) => {
  const branch = await Course.findAll({
    where: {
      id: req.params.id,
    },
    include: {
      model: Branch,
      as: "branch"
    }
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
  
  const courseToFind = await Course.findByPk(req.params.id);
  courseToFind.update({ ...req.body });
  console.log("testing", req.body);
  res.json(courseToFind);
  
});

// DELETE a course //
router.delete("/:id", async (req, res) => {
   await Course.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(await Course.findAll());
});


module.exports = router;