const db = require('../data/connection');

module.exports = {
    add,
    getBy,
    get
}

function get() {
    return db('users as u')
    .select('u.id', 'u.username', 'u.department')
}

function getById(id) {
    return db('users')
    .where({ id: id })
    .select('users.id', 'users.username', 'users.department')
    .first();
}

function getBy(filter) {
    return db("users as u")
    .where(filter)
    .select('u.id', "u.username", 'u.department', 'u.password')
    .orderBy("u.id");
  }

function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(id => {
        return getById(id)
    })
}