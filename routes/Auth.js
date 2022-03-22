const router = require("express").Router();
const controller = require("../controllers/Auth");
const middlewares = require("../middlewares/index");

router.post(
  "/signup",
  middlewares.verifyAuth,
  middlewares.verifyRole,
  controller.signUp
);
router.post("/signin", controller.signIn);

module.exports = router;
