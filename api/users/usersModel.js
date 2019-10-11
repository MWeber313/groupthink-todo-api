const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    getTitles,
    add
}

function get() {
    return db('users')
}

function getById(id) {
    return db('users')
    .where({id})
    .first()
}

function getTitles(id) {
    console.log({id})
    console.log(id)
    return db('titles')
    .join('users', 'users.id', '=', 'titles.user_id')
    .where('titles.user_id', '=', id)
    .select('users.name', "titles.title" )
}

function add(user) {
    return db('users')
    .insert(user)
}