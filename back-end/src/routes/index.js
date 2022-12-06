const { Router } = require('express');
const productRouter = require('./productRouter');
const saleRouter = require('./saleRouter');
const userRouter = require('./userRouter');
const imageRouter = require('./imageRouter');

const routes = Router();

routes.use('/sales', saleRouter);

routes.use('/images', imageRouter);

routes.use('/products', productRouter);

routes.use(userRouter);

module.exports = routes;
