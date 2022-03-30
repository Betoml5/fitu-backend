const router = require("express").Router();
const controller = require("../controllers/Auth");
const middlewares = require("../middlewares/index");
const validator = require("../middlewares/validator");

router.post(
  "/signup",
  middlewares.verifyAuth,
  middlewares.verifyRole,
  controller.signUp
);
router.post("/signin", controller.signIn);

module.exports = router;
