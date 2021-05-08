module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
        type: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        data: {
            type: DataTypes.BLOB("long"),
        },
    });

    return Image;
};

var fs = require('fs');

const db = require('./app/config/db.config.js');

const Image = db.badge;

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
    //Give any image name here.
    var imageUrl = fs.readFileSync(__dirname + '/static/assets/images/png');
    Image.create({
        type: 'png',
        name: 'JSA Banner',
        data: imageUrl
    }).then(image => {
        try {
            fs.writeFileSync(__dirname + '/static/assets/tmp/tmp-jsa-header.png', image.data);

            // exit node.js app
            process.exit(0);
        } catch (e) {
            console.log(e);
        }
    })
});