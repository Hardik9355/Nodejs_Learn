const express = require("express");
const createUser = require ("../controllers/signupcontroller");
const authorization = require("../middleware/authorization")
const router = express.Router();
router.post("/create", createUser  );

module.exports = router;