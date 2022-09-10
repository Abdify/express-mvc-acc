// external import
const mongoose = require("mongoose");

// MongoDB with Mongoose directly
function dbConnect() {
  mongoose
    .connect(process.env.DATABASE_LOCAL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("DB with Mongoose connected successfully.");
    });
}

// module exports
module.exports = dbConnect;
