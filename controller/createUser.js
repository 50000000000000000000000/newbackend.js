const fs = require("fs")
const path = require("path")
const {v4:uuidv4} = require('uuid')

const createUser = (req, res) => {
  // console.log(JSON.stringify(req.body))
  const { readFileSync, writeFileSync } = fs;
  let data = JSON.stringify(req.body);

  let userDB = readFileSync(path.resolve( "db", "users.json"), {
    encoding: "utf8",
  });

  userDB = JSON.parse(userDB);

  for (const user of userDB) {
    if (user.email === req.body.email) {
      return res.send(`${req.body.email} exists`);
    }
  }

  // id
  req.body.id = uuidv4()

  userDB.push(req.body);
  userDB.id = uuidv4()

  userDB = JSON.stringify(userDB);

  fs.writeFileSync(path.resolve("db", "users.json"), userDB);
  res.send("i have seen it");
};

module.exports = createUser;

