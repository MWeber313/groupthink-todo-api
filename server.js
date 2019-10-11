const express = require('express');

const server = express();

const userRouter = require('./api/users/usersRouter');
const todoRouter = require('./api/todos/todosRouter');

server.use(express.json());
server.use('/api/users', userRouter)
server.use('/api/todos', todoRouter)

server.get('/', (req, res) => {
    res.send('Hi Everyone!')
})

module.exports = server;