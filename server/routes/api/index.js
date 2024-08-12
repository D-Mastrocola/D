const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const dweetRoutes = require("./dweet-routes.js");

router.use("/users", userRoutes);
router.use("/dweets", dweetRoutes);

module.exports = router;
