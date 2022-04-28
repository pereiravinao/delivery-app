/* const express = require('express');
const loginController = require('../database/controllers/loginController');
const loginError = require('../database/middlewares/loginError');

const router = express.Router();

router
  .use(loginError.validateEmail)
  .use(loginError.validatePassword)
  .post('/', loginController.login);

module.exports = { router }; */