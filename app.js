console.clear()
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.port || 3001

/** Aqui invoca las rutas  */
 
app.use('/api',require('./routes'))

app.listen( port, ()=> {
    console.log('**CONECCION CORRECTA** http://localhost:' + port)
});

dbConnect()


