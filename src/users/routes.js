const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getUsers);

router.get("/:id", controller.getUserById);

router.post("/", controller.addUser);

router.delete("/:id", controller.deleteUserById);

router.put("/:id", controller.updateUserById);

module.exports = router;
