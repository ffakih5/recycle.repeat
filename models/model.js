module.exports(sequelize, DataTypes) => {
    const Score = sequelize.define("score",
        {
            email: DataTypes.STRING,
            primaryKey: true,
            score: DataTypes.INTEGER,
            current_badge: DataTypes.STRING

        });
    const Badge = sequelize.define("badge",
        {
            badge_name: DataTypes.STRING,
            primaryKey: true,
            score: DataTypes.INTEGER,
            image: DataTypes.STRING
        });
    return Score, Badge;

};

