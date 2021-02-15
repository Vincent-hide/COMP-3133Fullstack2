const express = require('express')
const User = require("./schemas/user.js");
const mongoose = require("mongoose");



const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/users', (req, res) => {
  // const newUsers = new User(user);
  newUsers.save();
  res.send('Saveing!')
});

const url = "mongodb://localhost:27017/lab4";

mongoose.connect(
    url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
    .then(() => console.log("Mongo DB Connected"))
    .catch(err => console.log("ERR", {url, err}))

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))