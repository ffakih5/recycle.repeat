const { sequelize, DataTypes } = require("../models");

module.exports(sequelize, DataTypes) => {
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

    const Badge = sequelize.define("badge",
        {
            badge_name: DataTypes.STRING,
            primaryKey: true,
            score: DataTypes.INTEGER,
            image: DataTypes.BLOB("long")
        });

    return Badge;

};

const fs = require('fs');

module.exports = (sequelize, DataTypes, db) => {
    const Image = sequelize.define("badge", {
        image: {
            type: DataTypes.BLOB("long"),
        },
    });

    //const Image = db.badge;
    //const db = require("../models");
    // force: true will drop the table if it already exists
    db.sequelize.sync({ force: true }).then(() => {
        //Give any image name here.
        const imageUrl = fs.readFileSync(__dirname + '/assets/images/goldfish.png');
        Image.create({
            type: 'png',
            name: 'JSA Banner',
            data: imageUrl
        }).then(image => {
            try {
                fs.writeFileSync(__dirname + '/assets/images/goldfish.png', image.data);

                // exit node.js app
                process.exit(0);
            } catch (e) {
                console.log(e);
            }
        })
    });

    return Image;
};



