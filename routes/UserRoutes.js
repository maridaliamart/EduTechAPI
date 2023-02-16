const express = require("express");
const router = express.Router();
const { User } = require("../models/index");


// GET all Users 
router.get("/", async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.oidc.user.email
    }
  })
  console.log(`${req.oidc.user}`)
  console.log(`Brynner: ${user}`)
  // if (!Object.values(user[roles].includes({"User": 2001}))) { return }
  const users = await User.findAll();
  res.json(users);
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
    ...req.body,
    roles: {
      "User": 2001
    }
  })
  res.json(`Successfully created ${user} with the role of ${user.roles}`)
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