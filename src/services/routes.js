const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getServices);

router.get("/:id", controller.getServiceById);

router.post("/", controller.addService);

router.delete("/:id", controller.deleteServiceById);

router.put("/:id", controller.updateServiceById);

module.exports = router;
