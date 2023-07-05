const { log } = require("console");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
require('dotenv').config()


const register = require("./router/register");
const home = require("./router/home");
const getRegister = require("./router/register");
const users = require("./router/users");
const user = require("./router/user");
const authoticateUser = require("./middleware/authoticateUser");
const connect = require("./db/connectDB");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// post
app.use("/", register);
app.use("/", home);
app.use("/", getRegister);
app.use("/", users);
app.use("/", authoticateUser, user);


app.set("view engine", "ejs");

app.listen(PORT, async() => {
  await connect().catch(err => console.log(err));
  console.log(`we are good to go ${PORT}`);
});






