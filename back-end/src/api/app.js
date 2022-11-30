require('express-async-errors');
const express = require('express');
const bodyParser = require('body-parser');
const handleError = require('../middlewares/handleErrorMiddleware');
const userRoutes = require('../routes/userRoutes');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(bodyParser.json());
app.use(userRoutes);

app.use(handleError);

module.exports = app;
