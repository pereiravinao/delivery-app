require('dotenv').config();

const { Op } = require("sequelize");
const { User } = require('../models');

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 12) {
    return res.status(400).json({ message: '"name" length must be greater than or equal to 12 characters long' });
  }

  next();
}

const existValues = async (req, res, next) => {
  const { email, name } = req.body;
  const checkEmail = await User.findOne({
    where: {
      [Op.or]: [
        { name },
        { email },
      ]
    }
  });
  if (checkEmail) {
    return res.status(409).json({ message: 'Name or email already registered' });
  }

  next();
}

module.exports = { validateName, existValues };