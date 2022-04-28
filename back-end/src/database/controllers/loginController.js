/* const { getLogin } = require('../services/loginService');

const login = async (req, res) => {
  try {
    const login = req.body;
    const data = await getLogin(login);
    return res.status(201).json({ data });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
}

module.exports = { login }; */