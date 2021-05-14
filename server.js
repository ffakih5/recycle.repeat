const express = require("express");
const apiRouter = require("./routes/api-routes.js");
const sequelize = require("./config/connection");


const app = express();
const PORT = process.env.PORT || 3000;

//SETUP EXPRESS APP TO HANDLE DATA PARSING- MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(apiRouter);

const userInViews = require('./middleware/userInViews');
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// ..
app.use(userInViews());
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);
// ..

// START API SERVER
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));
});

