const express = require("express");
const router = express.Router();
const { Course } = require("../models/index");


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

// // PUT update duration of the course //
// router.put("/:courseId/wa",[check("rating").not().isEmpty().trim()], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     res.json({ error: errors.array() });
//   } else {
//   const updaterating = await Show.findByPk(req.params.showId);
//   updaterating.update({ rating: req.body.rating });
//   console.log("testing", req.body);
//   res.json(updaterating);
//   }
// });



// DELETE a show //
router.delete("/:id", async (req, res) => {
  const coursedelete = await Course.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(await Course.findAll());
});

module.exports = router;