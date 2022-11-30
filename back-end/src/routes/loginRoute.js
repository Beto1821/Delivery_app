const express = require('express');
const userController = require('../controller/userController');

const loginRoute = express.Router();

loginRoute.post('/login', userController.login);

module.exports = loginRoute;
