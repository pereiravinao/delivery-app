const { getLogin } = require("../services/loginService");


const login = async (req, res) => {
  try {
    const login = req.body;
    const data = await getLogin(login);
    if(!data) return res.status(404).json('Not found');
    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { login };