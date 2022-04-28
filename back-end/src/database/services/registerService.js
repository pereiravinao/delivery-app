require('dotenv').config();

const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../models');

const SECRET = fs.readFileSync(path.resolve('jwt.evaluation.key'), 'utf-8');

const createRegister = async (registrationData) => {
  try{
    const { name, email, password } = registrationData;
    const hash = md5(password);
    await User.create({ name, email, password: hash });
    const token = jwt.sign({ name, email }, SECRET);
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createRegister };