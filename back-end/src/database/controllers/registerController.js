const { createRegister } = require('../services/registerService');

const register = async (req, res) => {
  try {
    const registerUser = req.body;
    const data = await createRegister(registerUser);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json(err);
  }
}

module.exports = { register };