const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const dweetRoutes = require("./dweet-routes.js");
const commentRoutes = require("./comment-routes.js");

router.use("/users", userRoutes);
router.use("/dweets", dweetRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
