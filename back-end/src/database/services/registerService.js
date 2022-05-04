require('dotenv').config();

const md5 = require('md5');
const { user } = require('../models');

const createRegister = async (registrationData) => {
  try{
    const { name, email, password } = registrationData;
    const hash = md5(password);
    const create = await user.create({ name, email, password: hash });
    return {
      id: create.id,
      name: create.name,
      email: create.email,
      role: create.role,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createRegister };