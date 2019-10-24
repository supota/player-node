// Import util libraries
const Express = require('express'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      helmet = require('helmet'),
      path = require('path');

const app = Express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(Express.static(path.join(__dirname, 'public')));

module.exports = app;