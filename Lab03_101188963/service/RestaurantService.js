const { Restaurant } = require("./../model/Restaurant");

const GetRestaurantsWithCuisine = (nationality) => {
  return Restaurant.find({ cuisine: nationality }).exec();
};

const GetRestaurants = async ({ sortBy }) => {
  let res;
  if (sortBy === "ASC") {
    res = await Restaurant.find({}).sort("id cuisines name city restaurant_id");
  } else if (sortBy === "DESC") {
    res = await Restaurant.find({}).sort(
      "-id -cuisines -name -city -restaurant_id"
    );
  } else {
    res = await Restaurant.find({});
  }
  return res;
};

const GetDelicatessen = async () => {
  return Restaurant.find({
    cuisine: "Delicatessen",
    city: { $ne: "Brooklyn" },
  }).exec();
};

module.exports = {
  GetRestaurants,
  GetRestaurantsWithCuisine,
  GetDelicatessen,
};
