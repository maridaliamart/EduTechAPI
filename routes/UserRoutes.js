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
router.post("/", async (req,res) => {
  const user = await User.create({
    ...req.body
  })
  res.json(`Successfully created ${user}`)
})

// DELETE a User
router.delete("/:id", async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(await User.findAll());
});

module.exports = router;