const express = require('express');
const logger = require('morgan');
const path = require('path');
require('dotenv').config({ path: `${__dirname}/../.env` });

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
require('./db/db');

console.log(process.env.APP_NAME);
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
