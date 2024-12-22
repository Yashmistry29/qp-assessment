const router = require("express").Router();
const Grocery = require("../models/Grocery");
var groceryObject = require("../groceryData.json");

router.get("/", async (req, res, next) => {
  var message = {
    success: true,
    message: "Welcome to the Question Pro Assesment Test...",
  };
  res.send(message);
});

router.post("/update-grocery-list", async (req, res, next) => { 
  try {
    var counter = 0;
    groceryObject.forEach((grocery) => {
      counter++;
      grocery.id = counter;
    });
    console.log(groceryObject);
    await Grocery.deleteMany({});
    await Grocery.insertMany(groceryObject);
    res.send({
      success: true,
      message: "Grocery list updated successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Failed to update grocery list",
    });
  }
});

module.exports = router;