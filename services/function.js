const fs = require("fs");
const path = require("path");

const getDB = () => {
  let userDB = fs.readFileSync(path.resolve("db", "users.json"), {
    encoding: "utf8",
  });

  userDB = JSON.parse(userDB);
  return userDB;
};

const setDB = (users) => {
  fs.writeFileSync(path.resolve("db", "users.json"), JSON.stringify(users));
};

const getItemBYID = (id, db) => {
  const item = db.find((one) => one.id === id);
  return item;
};

const getItemByName = (username, db) => {
  const item = db.find((one) => one.username === username);
  return item;
};

const getItem = (key, db) => {
  const item = db.find((one) => one["email"] === key);
  return item;
};

module.exports = { getDB, setDB, getItemBYID, getItemByName, getItem };
