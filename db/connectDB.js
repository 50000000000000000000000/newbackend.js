const mongoose = require('mongoose');

// connect().catch(err => console.log(err));

async function connect() {
  await mongoose.connect(process.env.MONGODB_URI);
}

module.exports = connect