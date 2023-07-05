const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { getDB, getItem, setDB } = require("../services/function");
const User = require("../model/user");

const createUser = async (req, res) => {
  // Desturcture request's body
  const { username, password, email, } = req.body;

  // get DataBace
  // let userDB = getDB();

  // check if the user exist in the DataBase
  // const user = getItem(email, userDB);

  // if the user exist

  // if (user) {
  //   return res.send(`${req.body.email} exists`);
  // }


  // if user dosen't exist

  // Hash new user password
  const salt = bcrypt.genSaltSync(10);
  const hashedpassword = bcrypt.hashSync(password, salt);

  
    // Create new user Info
    const newUser = { username, password: hashedpassword, email };
    
    // Assign ID to the new user
    // newUser.id = uuidv4();
    
    // sign jwt
    const token = jwt.sign({ username, email, id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

  // Add new user to the DataBase
  // userDB.push(newUser);
  await User.create(newUser)

  // save to DataBase
  // setDB(userDB);
  // send to the cilent
  res.send({token});
};

module.exports = createUser;
