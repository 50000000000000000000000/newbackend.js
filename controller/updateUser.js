const { getDB, getItemBYID, setDB } = require("../services/function");

exports.updateUser = (req, res) => {
  // console.log(req.params.userID);
  const { userID } = req.params;
  const { username, email, phone, age } = req.body;

  const userDB = getDB();
  const user = getItemBYID(userID, userDB);
  if (email || password || username || phone || age) {
    const upduser = {
      username: username || user.username,
      email: email || user.email,
      age: age || user.age,
      phone: phone || user.phone,
    };

    let users = userDB.filter((u) => u.id !== user.id);
    users = [...users, upduser];

    setDB(users)
    res.send(upduser)
  }

  console.log(user);
  res.send("update user");

  console.log(req.body);
};
