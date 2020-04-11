const express = require('express');
const path = require('path');
//initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));


//moddlewares
app.use(express.urlencoded({ extended: false}));

//Global variables

//routes
app.get('/', (req, res) =>{
    res.send('Hola mundo');
});

//static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;