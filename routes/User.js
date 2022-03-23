const router = require("express").Router();
const controller = require("../controllers/User");
const middlewares = require("../middlewares");

router.get(
  "/all",
  middlewares.verifyAuth,
  middlewares.verifyRole,
  controller.find
);
router.get(
  "/:id",
  middlewares.verifyAuth,
  middlewares.verifyRole,
  controller.findOne
);
router.put(
  "/:id",
  middlewares.verifyAuth,
  middlewares.verifyRole,
  controller.updateOne
);
router.delete(
  "/:id",
  middlewares.verifyAuth,
  middlewares.verifyRole,
  controller.deleteOne
);

module.exports = router;
