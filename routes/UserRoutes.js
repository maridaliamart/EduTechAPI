const express = require("express");
const router = express.Router();
const { User } = require("../models/index");


// GET all Users 
router.get("/", async (req, res) => {
  const user = await User.findAll();
  res.json(user);
});


// GET a user by id
router.get("/:id", async (req, res) => {
  const user = await Course.findAll({
    where: {id: req.params.id}
  });
  res.json(user);
});

// Create a user
router.post("/")

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

// DELETE a User
router.delete("/:id", async (req, res) => {
  const userToDelete = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(await User.findAll());
});

module.exports = router;