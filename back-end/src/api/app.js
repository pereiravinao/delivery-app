const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const loginRouter = require('../routes/loginRoute');
const registerRouter = require('../routes/registerRoute');

app.use('/login', loginRouter.router);
app.use('/register', registerRouter.router);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
