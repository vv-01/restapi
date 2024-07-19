const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getUserTypes);

router.get("/:id", controller.getUserTypeById);

router.post("/", controller.addUserType);

router.delete("/:id", controller.deleteUserTypeById);

router.put("/:id", controller.updateUserTypeById);

module.exports = router;
