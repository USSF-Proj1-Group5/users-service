module.exports = {
    HOST: "localhost",
    USER: "Emily",
    PASSWORD: "cats",
    DB: "users_microservice",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };