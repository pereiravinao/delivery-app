require('dotenv').config();

const isEmailValid = (email) => {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email);
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (isEmailValid(email) === false) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be greater than or equal to 6 characters long' });
  }

  next();
};

module.exports = {
  validateEmail,
  validatePassword,
};