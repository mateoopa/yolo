const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const expressMySQLSession = require ('express-mysql-session');
const { database } = require('./keys');
const passport = require('passport');

// initialitations
const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require("./lib/handlebars"),
}));
app.set('view engine', '.hbs');

// middlewares
app.use(session({
    secret: "faztmysqlnodemysql",
    cookie: {},
    resave: false,
    saveUninitialized: false,
/*     store: new expressMySQLSession(database) */
}));

app.use(morgan('dev'));

// global variables

// routes
/* app.use(require('./routes')); */
app.use('/yolo', require('./routes'));


// public
app.use(express.static(path.join(__dirname, 'public')));

// starting
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});