const express = require("express");
const{ getUser} = require("../controllers/getcontroller");
const authorization = require("../middleware/authorization");
const router = require("./signuprouter");
router.get("/get",authorization,getUser);
module.exports = router;
