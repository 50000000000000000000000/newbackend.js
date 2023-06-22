const { log } = require("console");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 1000;
const register = require("./router/register");
const home = require("./router/home");
const getRegister = require("./router/register");
const users = require("./router/users");
const user = require("./router/user");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// post
app.use("/", register);
app.use("/", home);
app.use("/", getRegister);
app.use("/", users);
app.use("/", user);

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`we are good to go ${PORT}`);
});













// app.get("/", (req, res) => {
//   res.send("hello world");
// });