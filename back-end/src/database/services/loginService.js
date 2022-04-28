/* require('dotenv').config();

const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../models/User');

const SECRET = fs.readFileSync(path.resolve('jwt.evaluation.key'), 'utf-8');

const getLogin = async (login) => {
  try {
    const { email, password } = login;
    const hash = md5(password);
    const loginEmail = await User.findOne({ where: { email, hash } });
    if (!loginEmail) return null;
    const { id, name, role } = loginEmail;
    const token = jwt.sign({ id, name, role, email }, SECRET);
    return token;
  } catch (err) {
    return console.log(`Login ${error}`);
  }
}

module.exports = { getLogin }; */
