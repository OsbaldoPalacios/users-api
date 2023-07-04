const Users = require('../models/users.model');

//Hallar todo los usuarios
const findAllUsers = async () => {
    const users = await Users.findAll();
    return users
}

//Hallar un usuario de acuerdo a un id
const findUserById = async (id) =>{
    const user = await Users.findOne({
        where: {
            id: id
        }
    })
    return user;
}

//Crear un nuevo usuario
const createUser = async (userObj) => {
    const newUser = await Users.create({
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password
    })
    return newUser;
}

//Actualizar datos de un usuario dando como parámtro el Id
const updateUser = async (id, userObj) => {
    const selectedUser = await Users.findOne({
        where: {
            id: id
        }
    });
    if(!selectedUser) return null
    const modifiedUser = selectedUser.update(userObj)
    return modifiedUser;
}

//Eliminar un usuario dado como parámetro el Id
const deleteUser = async (id) => {
    const user = await Users.destroy({
        where: {
            id: id
        }
    })
    return user
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
};