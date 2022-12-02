const { Router } = require('express');
const productController = require('../controller/productController');
const verifyToken = require('../middlewares/verifyTokenMiddleware');

const productRouter = Router();

productRouter.get('/', verifyToken, productController.getAll);

module.exports = productRouter;
