const userControllers = require('./users.controllers');

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({messege: 'Bad request', err})
        })
}

const getUserById = (req, res) => {
    const id = Number(req.params.id)
    userControllers.findUserById(id)
    .then((data) => {
        if(!data){
            return res.status(404).json({messege: `User with id ${id},not found`})
        }
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json({messege: "Bad request", err})
    })
}

const postNewUser = (req, res) => {
    const userObj = req.body
    userControllers.createUser(userObj)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({messege: "Bad request", err})
        })
}

const patchUser = (req, res) => {
    const id = Number(req.params.id)
    const userObj = req.body
    userControllers.updateUser(id, userObj)
        .then((data) => {
            if(!data){
                return res.status(404).json({message: "Invalid Id"})
            }
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: "Bad request", err})
        })
}

const deleteUser = (req, res) => {
    const id = Number(req.params.id)
    userControllers.deleteUser(id)
        .then((data) => {
            if(!data){
                return res.status(404).json({message: "Invalid Id"})
            }
            res.status(204).json()
        })
        .catch((err) => {
            res.status(400).json({message: "Bad request", err})
        })
}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser,
    patchUser,
    deleteUser
}