const db = require("../models");
const Households = db.households;
const Op = db.Sequelize.Op;

// Retrieve all Households from the database.
exports.findAll = (req, res) => {

  Households.findAll()
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

// Find a single User's households
exports.findHouseholds = (req, res) => {
    const id = req.params.id;
  
    Households.findAll({
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