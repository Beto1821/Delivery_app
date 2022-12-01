const { Router } = require('express');
const SaleController = require('../controller/SaleController');
const verifyToken = require('../middlewares/verifyTokenMiddleware');

const SaleRouter = Router();

SaleRouter.post('/', verifyToken, SaleController.insertSale);

module.exports = SaleRouter;
