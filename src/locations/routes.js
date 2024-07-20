const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getLocations);

router.get("/:id", controller.getLocationById);

router.post("/", controller.addLocation);

router.delete("/:id", controller.deleteLocationById);

router.put("/:id", controller.updateLocationById);

module.exports = router;
