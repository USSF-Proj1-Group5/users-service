const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.userTasks = require("./userTasks.model.js")(sequelize, Sequelize);

module.exports = db;

// async function emily () {
//   await User.create({
//     firstName: "Emily",
//     lastName: "Hosoya",
//     username: "emilyhosoya",
//     password: "cats",
//     email: "emily@gmail.com",
//     phoneNumber: "123-456-7890"
//   })
// }

// emily()

// const airmanSnuffy = await User.create({
//   firstName: "Airman",
//   lastName: "Snuffy",
//   username: "snuffy",
//   password: "password",
//   email: "airman.snuffy@spaceforce.mil",
//   phoneNumber: "987-654-3210"
// })

// const taskOne = await UserTasks.create({
//   user_id: 1,
//   task_id: 1,
// })

// const taskTwo = await UserTasks.create({
//   user_id: 1,
//   task_id: 3,
// })

// const taskThree = await UserTasks.create({
//   user_id: 2,
//   task_id: 2,
// })
