require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');


const app = express()

app.use(cors())

const port = process.env.port || 3000

app.listen( port, ()=> {
    console.log('**CONECCION CORRRECTA** http://localhost:' + port)
});


dbConnect()

//app.listen([port[, host[, backlog]]][, callback])



/*require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo.js')
const app = express()

app.use(cors())

const port = process.env.PORT || 3000

app.listen( port, () => {
    console.log('tu app esta lista por http://localhost:' + port)
})

dbConnect()*/