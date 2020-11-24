module.exports = app => {
    const userTasks = require("../controllers/userTasks.controller.js");
  
    var router = require("express").Router();

    // Retrieve all User Tasks
    router.get("/", userTasks.findAll);

    // Retrieve a single User's tasks by user id
    router.get("/:id", userTasks.findTasks);
  
    app.use('/api/usertasks', router);
  };
  