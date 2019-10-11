const express = require('express')

const router = express.Router();

const Users = require('./usersModel');

router.get('/', (req, res) => {
    Users.get()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    Users.getById(req.params.id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id/titles', (req, res) => {
    Users.getTitles(req.params.id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    Users.add(req.body)
    .then(user => {
        res.status(201).json(req.body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;