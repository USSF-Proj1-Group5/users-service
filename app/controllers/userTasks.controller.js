const db = require("../models");
const UserTasks = db.userTasks;
const Op = db.Sequelize.Op;

// Retrieve all UserTasks from the database.
exports.findAll = (req, res) => {


  UserTasks.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single User's tasks
exports.findTasks = (req, res) => {
    const id = req.params.id;
  
    UserTasks.findAll({
        where: {
            user_id: id
        }
      .then(data => {
        res.send(data);
      })
    })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
  };