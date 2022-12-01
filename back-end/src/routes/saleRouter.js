const { Router } = require('express');
const saleController = require('../controller/saleController');
const verifyToken = require('../middlewares/verifyTokenMiddleware');

const saleRouter = Router();

saleRouter.post('/', verifyToken, saleController.insertSale);
saleRouter.get('/history', verifyToken, saleController.findSaleHistory);
saleRouter.get('/:id', verifyToken, saleController.findSaleById);

module.exports = saleRouter;
