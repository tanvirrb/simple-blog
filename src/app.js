const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
require('./db/db');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
