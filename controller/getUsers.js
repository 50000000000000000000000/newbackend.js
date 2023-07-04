const { getDB } = require("../services/function");

const getUsers = (req, res) => {
  //   res.render("vusers");
  const userDB = getDB();

  console.log(getDB());

  res.render("vusers", { users: userDB });
};
module.exports = getUsers;
