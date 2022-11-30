const { Router } = require('express');
const SaleRouter = require('./SaleRouter');

const routes = Router();

routes.use('/sales', SaleRouter);

module.exports = routes;
