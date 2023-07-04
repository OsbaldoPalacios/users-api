const Posts = require('./posts.model');
const Users = require('./users.model');

const initModels = () => {
    Users.hasMany(Posts);
    Posts.belongsTo(Users);
}

module.exports = initModels;