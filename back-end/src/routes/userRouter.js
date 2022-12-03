const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter.post(
  '/login',
  userController.login,
);

userRouter.post(
  '/register',
  userController.userRegister,
);

userRouter.post(
  '/user',
  userController.createUser,
);

userRouter.delete(
  '/user/:id',
  userController.deleteUser,
);

module.exports = userRouter;
