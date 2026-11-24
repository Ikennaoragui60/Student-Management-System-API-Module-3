const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registrationController");

router.post("/", registrationController.createRegistration);
router.get("/", registrationController.getAllRegistrations);
router.get("/:id", registrationController.getRegistration);
router.put("/:id", registrationController.updateRegistration);
router.delete("/:id", registrationController.deleteRegistration);

module.exports = router