module.exports = (sequelize, Sequelize) => {
    const Households = sequelize.define("household", {
      streetAddress: {
        type: Sequelize.STRING
      },
      unitNumber: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.STRING
      }
    });
  
    return Households;
  };