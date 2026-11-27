const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://enprobir1991_db_user:fbk8d0QTedKEFDWY@namaste-node.boytztm.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
