const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

//SETUP EXPRESS APP TO HANDLE DATA PARSING- MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//ROUTES
require("./routes/api-routes.js")(app);

// app.js

const userInViews = require('./lib/middleware/userInViews');
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// ..
app.use(userInViews());
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);
// ..

const db = require("./models");
// START API SERVER
db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));
});

