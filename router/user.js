const express = require("express");
const createUser = require("../controller/createUser");
const getRegister = require("../controller/getRegister");
const getHome = require("../controller/getHome");
const { getUser } = require("../controller/getUser");
const { removeUser } = require("../controller/removeUser");
const { updateUser } = require("../controller/updateUser");
const router = express.Router();

router.route("/users/:userID").get(getUser).delete(removeUser).put(updateUser)

module.exports = router;
