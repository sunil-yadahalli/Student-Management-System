const mongoose = require("mongoose");
const db =
  "mongodb+srv://sumabale:suma0819@cluster0-pgi5o.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("mongo connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
