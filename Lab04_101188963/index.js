const express = require("express");
const User = require("./schemas/user.js");
const mongoose = require("mongoose");

const users = require("./UserData.json");

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", (req, res) => {
  let errorMsg = [];
  users.map(async (user) => {
    const newUser = new User(user);
    let error = newUser.validateSync();
    errorMsg.push({ ...error.errors, user: newUser.id });
    await newUser.save();
  });

  let ErrMsg = "";

  errorMsg.map((msg) => {
    ErrMsg += `ID: ${msg.user}\n`;
    Object.keys(msg).map((key) => {
      if(msg[key].message !== undefined)
      ErrMsg += `${msg[key].message}\n`
    });
    ErrMsg += "\n"
  });

  res.send(ErrMsg);
});

const url = "mongodb://localhost:27017/lab4";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo DB Connected"))
  .catch((err) => console.log("ERR", { url, err }));

app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
