require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');


const app = express()

app.use(cors())

const port = process.env.port || 3001

/** Aqui invoca las rutas  */

app.use('/api',require('./routes'))

app.listen( port, ()=> {
    console.log('**CONECCION CORRRECTA** http://localhost:' + port)
});

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})


dbConnect()


