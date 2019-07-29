const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

app.use(express.json({ extended: false }));

//cors access to the server
app.use(cors());

// app.use(function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");

//   next();
// });

// app.get("/", (req, res) => {
//   res.send("welcome to express-mongoose node application");
// });

app.use("/api/students", cors(), require("./routes/api/students"));
//app.use("/api/teachers", require("./routes/api/teacher"));

//setting to be made before uploading to heroku

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
