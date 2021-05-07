const Sequelize = require("sequelize");

const sequelize = require("../config/connection.js");

const Score = sequelize.define("score",
    {
        email: Sequelize.STRING,
        score: Sequelize.INTEGER
    },
    {
        freezeTableName: true,
    }
);

Score.sync();

module.exports = Score;