const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    add,
}

function get() {
    return db('todos')
}

function getById(id) {
    return db('todos')
    .where({id})
}

function add(todo) {
    return db('todos')
    .insert(todo)
}