const { GetDB, GetItemByName } = require("../services/function");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const loginUser = (req, res) => {
  // Desturcture request body
  const { name, password } = req.body;

  // checking the boolen of the password
  if (!name || !password) {
    return res.status(400).send("name or password does not match");
  }

  //   get the DateBase
  const users = GetDB();

  // get the user by name from DataBase
  const user = GetItemByName(name, users);

  // if the user dosen't exit from the DataBase
  if (!user) {
    return res.status(401).send("name is not found");
  }

  //   checking the user password if they match to the DataBase
  const passwordMatch = bcrypt.comparesync(password, user.passwprd);
  if (!passwordMatch) {
    return res.status(401).send("name or password does not match");
  }

  //sign token to the user
  const token = jwt.sign({ name, email: user.email }, process.env.jwt_SECRET, {
    expiresIn: "30d",
  });

  res.send({ token });
};

module.exports = loginUser;
