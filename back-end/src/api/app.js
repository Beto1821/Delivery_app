require('express-async-errors');
const express = require('express');
const handleError = require('../middlewares/handleErrorMiddleware');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(handleError);

module.exports = app;
