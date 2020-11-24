module.exports = (sequelize, Sequelize) => {
    const UserTasks = sequelize.define("userTask", {
      user_id: {
        type: Sequelize.INTEGER
      },
      task_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return UserTasks;
  };