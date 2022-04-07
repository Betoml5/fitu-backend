const router = require("express").Router();
const controller = require("../controllers/Meeting");

router.post("/create", controller.create);
router.get("/:id", controller.findOne);
router.put("/update/:id", controller.updateOne);
router.delete("/delete/:id", controller.deleteOne);

module.exports = router;