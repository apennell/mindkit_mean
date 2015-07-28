// ====== modules ======
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');


// ====== configuration ======

var db = require('./config/db');

var port = process.env.PORT || 3000;

// mongoose.connect(db.url);

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));


// ====== routes ======
require('./app/routes')(app);


// listen for port to start
app.listen(port);

exports = module.exports = app;