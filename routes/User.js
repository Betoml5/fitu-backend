const router = require("express").Router();
const controller = require("../controllers/User");

router.get("/all", controller.find);
router.get("/:id", controller.findOne);
router.put("/:id", controller.updateOne);
router.delete("/:id", controller.deleteOne);

module.exports = router;
