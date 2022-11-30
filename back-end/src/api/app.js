require('express-async-errors');
const express = require('express');
const handleError = require('../middlewares/handleErrorMiddleware');
const loginRoute = require('../routes/loginRoute');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(handleError);
app.use(loginRoute);

module.exports = app;
