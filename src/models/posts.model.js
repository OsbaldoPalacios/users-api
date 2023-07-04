const {DataTypes} = require('sequelize');
const db = require('../utils/database');
const Users = require('./users.model');

const Posts = db.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,255]
        }
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1, Infinity]
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [1,255]
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            //Esto añade la clave foranea
            key: 'id',
            model: Users
        }
    }
});

module.exports = Posts;