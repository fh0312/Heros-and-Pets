var express = require("express");
var router = express.Router();

var hero_controller = require("../controllers/heroController");
var pet_controller = require("../controllers/petController");

router.get("/heroes", hero_controller.heroes_get);

router.get("/hero/:id", hero_controller.heroes_get_id);

router.get("/pets", pet_controller.pets_get);

router.get("/pet/:id", pet_controller.pets_get_id);

router.delete("/hero/:id", hero_controller.heroes_delete);

router.put("/hero/:id", hero_controller.heroes_put);

router.post("/hero", hero_controller.heroes_post);

module.exports = router;