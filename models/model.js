const sequelize = require("../config/connection");
const Sequelize = require("sequelize");
import { Sequelize };

//module.exports = (sequelize, DataTypes) => {
const Score = Sequelize.define("score",
    {
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        score: {
            type: Sequelize.INTEGER,
        },
        current_badge: {
            type: Sequelize.STRING
        },

    });
Score.sync();

const Badge = sequelize.define("badge",
    {
        badge_name: Sequelize.STRING,
        primaryKey: true,
        score: Sequelize.INTEGER,
        image: Sequelize.BLOB("long")
    });

Badge.sync();

//};
module.exports = Score, Badge;
