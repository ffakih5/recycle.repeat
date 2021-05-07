const Sequelize = require("sequelize");

const sequelize = new Sequelize("recycle", "root", "yourRootPassword", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;