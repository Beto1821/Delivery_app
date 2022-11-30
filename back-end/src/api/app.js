require('express-async-errors');
const express = require('express');
const handleError = require('../middlewares/handleErrorMiddleware');
const loginRoute = require('../routes/loginRoute');
const bodyParser = require('body-parser');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(bodyParser.json());
app.use(handleError);
app.use(loginRoute);

module.exports = app;
