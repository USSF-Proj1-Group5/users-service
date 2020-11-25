module.exports = app => {
    const households = require("../controllers/households.controller.js");
  
    var router = require("express").Router();

    // Retrieve all User Households
    router.get("/", households.findAll);

    // Retrieve a single User's households by user id
    router.get("/:id", households.findHouseholds);
  
    app.use('/api/households', router);
  };
  