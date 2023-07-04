const authoticateUser = (req, res, next) => {
    // 
  const authoticateHeader = req.header.authorization;

  if (!authoticateHeader || !authoticateHeader.startsWith("bearer")) {
    return res.status(403);
  }

  const token = authoticateHeader.split(" ")[1];
  req.token = token;
  next();
};

module.exports = authoticateUser;
