const express = require('express');
const registerController = require('../database/controllers/registerController');
const loginError = require('../database/middlewares/loginError');
const registerError = require('../database/middlewares/registerError');

const router = express.Router();

router
  .use(loginError.validateEmail)
  .use(loginError.validatePassword)
  .use(registerError.validateName)
  .use(registerError.existValues)
  .post('/', registerController.register);

module.exports = { router };