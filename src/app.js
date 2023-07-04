const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRouter = require('./users/users.router');

const app = express();

//Validar la conexión con la base de datos
db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch(err => console.log(err))
db.sync()
.then(() => console.log('Database Synced!'))
.catch(err => console.log(err))

initModels();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({message: "Server Ok"})
});

app.use('/api/v1/users', userRouter);


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})
