const express = require("express");
const mongoose = require("mongoose");
const RestaurantService = require("./service/RestaurantService");

const app = express();
const db_uri = "mongodb://localhost:27017/lab3";

// app.get("/restaurants", async(req, res) => {
//   res.json(await RestaurantService.GetRestaurants());
// });

app.get("/restaurants/cuisine/:nationality", async (req, res) => {
  res.json(
    await RestaurantService.GetRestaurantsWithCuisine(req.params.nationality)
  );
});

app.get("/restaurants", async (req, res) => {
  const {
    query: { sortBy },
  } = req;
  res.json(await RestaurantService.GetRestaurants({sortBy}));
});

app.get("/restaurants/Delicatessen", async (req, res) => {
  res.json(await RestaurantService.GetDelicatessen());
});



mongoose
  .connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log(`MongoDB connected`))
  .catch((err) => console.log(`MongoDB connection FAILED`, err));

app.listen(9000, () => {
  console.log("Server running");
});
