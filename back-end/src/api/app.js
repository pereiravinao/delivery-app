const express = require('express');

const app = express();

app.use(express.json());

const loginRouter = require('../routes/loginRoute');

app.use('/login', loginRouter.router);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
