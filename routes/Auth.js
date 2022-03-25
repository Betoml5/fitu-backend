const router = require("express").Router();
const controller = require("../controllers/Auth");
const middlewares = require("../middlewares/index");
const normalize = require("../middlewares/normalize")

router.post(
  "/signup",
  middlewares.verifyAuth,
  middlewares.verifyRole,
  normalize,
  controller.signUp
);
router.post("/signin", controller.signIn);

module.exports = router;
