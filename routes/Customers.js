const router = require("express").Router();
const controller = require("../controllers/Customers");
const middlewares = require("../middlewares/index")



router.get("/all", middlewares.verifyAuth, middlewares.verifyRole, controller.find)


module.exports = router;