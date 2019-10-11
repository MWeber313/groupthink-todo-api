const express = require('express');

const router = express.Router();

const Todos = require('./todosModel');

router.get('/', (req, res) => {
    Todos.get()
    .then(todos => {
        res.status(200).json(todos)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    Todos.getById(req.params.id)
    .then(todos => {
        res.status(200).json(todos)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    Todos.add(req.body)
    .then(todos => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;