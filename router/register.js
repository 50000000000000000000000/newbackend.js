const express = require("express");
const createUser = require("../controller/createUser");
const getRegister = require("../controller/getRegister");
const getHome = require("../controller/getHome");
const router = express.Router();

router.route("/register").get(getRegister).post(createUser);

// router.post("/register", createUser);

// router.get("/register", getRegister)

module.exports = router;
