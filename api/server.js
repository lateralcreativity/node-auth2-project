const express = require('express');
const server = express();
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const restricted = require('../auth/restricted-middleware');

server.use(express.json());

server.use('/auth', authRouter);
server.use('/users', restricted, usersRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

module.exports = server;