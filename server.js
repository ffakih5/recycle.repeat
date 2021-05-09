const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models")
//SETUP EXPRESS APP TO HANDLE DATA PARSING- MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//ROUTES
require("./routes/api-routes.js")(app);


// START API SERVER
db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));
});
