const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
//initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//moddlewares
app.use(express.urlencoded({ extended: false}));

//Global variables

//routes
app.use(require('./routes/index.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;