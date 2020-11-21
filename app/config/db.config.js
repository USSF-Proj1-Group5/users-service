module.exports = {
    HOST: "database",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "users_microservice",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };