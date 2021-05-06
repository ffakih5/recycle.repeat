const express = require("express");
const mysql = require("mysql");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;
//SETUP EXPRESS APP TO HANDLE DATA PARSING- MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);


//ROUTES
require("./app/routes/api-routes.js")(app);


// START API SERVER
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
