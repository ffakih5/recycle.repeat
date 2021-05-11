//const { sequelize, DataTypes } = require("../models");

module.exports = (sequelize, DataTypes) => {
    const Score = sequelize.define("score",
        {
            email: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            score: {
                type: DataTypes.INTEGER,
            },
            current_badge: {
                type: DataTypes.STRING
            }
        });
    return Score;
};
module.exports = (sequelize, DataTypes) => {
    const Badge = sequelize.define("badge",
        {
            badge_name: DataTypes.STRING,
            primaryKey: true,
            score: DataTypes.INTEGER,
            image: DataTypes.BLOB("long")
        });

    return Badge;
};