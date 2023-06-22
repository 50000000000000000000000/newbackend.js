const fs = require("fs");
const path = require("path");

const getUsers = (req, res) => {
//   res.render("vusers");
  let userDB = fs.readFileSync(path.resolve("db", "users.json"), {
    encoding: "utf8",
  });
  
  userDB = JSON.parse(userDB);
  ;
  res.render("vusers", {users: userDB})

};
module.exports = getUsers;
