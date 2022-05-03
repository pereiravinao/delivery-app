require('dotenv').config();

const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { user } = require('../models');



const SECRET = fs.readFileSync(path.resolve('jwt.evaluation.key'), 'utf-8');

const getLogin = async (login) => {
 
    try {
      const { email, password } = login;
      const hash = md5(password);
      const loginEmail = await user.findOne({
        where: { email },
      });
      if (!loginEmail) return null;
      if (loginEmail.password !== hash) return null;
      const { id, name, role } = loginEmail;
      const token = jwt.sign({ id, name, role, email }, SECRET);
      const data = { id, token, name, role, email };
      return data;
    } catch (error) {
      console.log(error);
    }
  
}

module.exports = { getLogin };
