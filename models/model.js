const sequelize = require("../config/connection");
const Sequelize = require("sequelize");

//module.exports = (sequelize, DataTypes) => {
const Score = sequelize.define("score",
    {
        email: {
            type: sequelize.STRING,
            primaryKey: true,
        },
        score: {
            type: sequelize.INTEGER,
        },
        current_badge: {
            type: sequelize.STRING
        },

    });
Score.sync();

const Badge = sequelize.define("badge",
    {
        badge_name: sequelize.STRING,
        primaryKey: true,
        score: sequelize.INTEGER,
        image: sequelize.BLOB("long")
    });

Badge.sync();

//};
module.exports = Score, Badge;
