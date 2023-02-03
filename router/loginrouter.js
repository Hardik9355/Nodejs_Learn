const express = require("express");
const login = require ("../controllers/logincontroller");
const router = express.Router();
router.post("/userlogin", login);

module.exports = router;
