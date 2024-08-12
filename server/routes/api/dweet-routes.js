const router = require("express").Router();
const { Dweet } = require("../../models");

// GET /api/dweets
router.get("/", (req, res) => {
  // Access our User model and run .findAll() method)
  Dweet.findAll()
    .then((dbDweetData) => res.json(dbDweetData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/dweets
router.post("/", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Dweet.create({
    user_id: req.body.user_id,
    title: req.body.title,
    desc: req.body.desc,
  })
    .then((dbDweetData) => res.json(dbDweetData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
