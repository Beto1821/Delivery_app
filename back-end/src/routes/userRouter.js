const express = require('express');
const userController = require('../controller/userController');
const verifyToken = require('../middlewares/verifyTokenMiddleware');

const userRouter = express.Router();

userRouter.post(
  '/login',
  userController.login,
);

userRouter.post(
  '/register',
  userController.userRegister,
);

userRouter.get(
  '/user',
  verifyToken,
  userController.index,
);

userRouter.post(
  '/user',
  verifyToken,
  userController.createUser,
);

userRouter.delete(
  '/user/:id',
  verifyToken,
  userController.deleteUser,
);

module.exports = userRouter;
