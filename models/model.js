const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

const Score = sequelize.define("score",
    {
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        score: {
            type: DataTypes.INTEGER
        },
        current_badge: {
            type: DataTypes.STRING
        },

    },
    {
        freezeTableName: true
    }

);
const Badge = sequelize.define("badge",
    {
        badge_name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        score: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        },


    },
    {
        freezeTableName: true
    }

);
Score.sync();
Badge.sync();
module.exports = {
    Score: Score, Badge: Badge
}