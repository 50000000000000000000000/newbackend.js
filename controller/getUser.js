// const getDB = require("../services/function")

const { getDB } = require("../services/function");

exports.getUser = (req, res) => {
  const { token } = req;

  const user = jwt.verify(token, process.env.JWT_SECRET);

  res.send(user);
  //   const userDB = getDB();
  //   // console.log(getDB());

  //   const user = userDB.find((user) => {
  //     return user.id === req.params.userID;
  //   });
  // //   console.log(user)
  //   res.send(user.username);
};
