// Import util libraries
const Express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// Create app
const app = Express();

// Import model and connect
const Player = require('./src/models/Player');
Player.sync();

// Import routes
const routes = require('./src/routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(Express.static(path.join(__dirname, 'public')));
app.use('/v1/', routes);

module.exports = app;
