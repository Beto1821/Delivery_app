const { Router } = require('express');
const saleRouter = require('./saleRouter');
const userRouter = require('./userRouter');

const routes = Router();

routes.use('/sales', saleRouter);

routes.use(userRouter);

module.exports = routes;
