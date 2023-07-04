const { getDB, setDB, getitemBYID } = require("../services/function");

const removeUser = (req, res) => {
  const userDB = getDB();
  // let user = userDB.find((user) => {
  //   return userDB.id === req.params.userID;

    const users = userDB.filter((user) => user.id !== req.params.userID);

    setDB(users);

     const user = getitemBYID(req.params.userID, userDB);

    console.log(users);
    res.send(`${user.name} has been removed`);
  // });
};

module.exports = removeUser;
