const session = require('express-session');

// config express-session
const sess = {
    secret: 'KNICKKNACKPADDYWAGGIVEADOGABONE',
    cookie: {},
    resave: false,
    saveUninitialized: true
};

if (app.get('env') === 'production') {
    // Use secure cookies in production (requires SSL/TLS)
    sess.cookie.secure = true;

    // Uncomment the line below if your application is behind a proxy (like on Heroku)
    // or if you're encountering the error message:
    // "Unable to verify authorization request state"
    // app.set('trust proxy', 1);
}

app.use(session(sess));