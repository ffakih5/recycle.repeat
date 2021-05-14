const express = require("express");
const apiRouter = require("./routes/api-routes.js");
const sequelize = require("./config/connection");

const app = express();
// Load environment variables from .env
const dotenv = require('dotenv');
dotenv.config();

// Load Passport
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
    {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL:
            process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
        // accessToken is the token to call Auth0 API (not needed in the most cases)
        // extraParams.id_token has the JSON Web Token
        // profile has all the information from the user
        return done(null, profile);
    }
);
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "pug");

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
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

