const express = require("express");
const createUser = require ("../controllers/signup");
const router = express.Router();
router.post("/create", createUser  );
module.exports = router;