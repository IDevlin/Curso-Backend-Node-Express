const express = require('express');
const router = express.Router(); 
const fs = require ('fs')

const PATH_ROUTES = __dirname;

const fileNames = fs.readdirSync(PATH_ROUTES)

const removeExt = (fileName) => {
    return fileName.split('.').shift()
}

fileNames.filter((file) => {
    const name = removeExt(file) //users, storage, tracks
    if(name !== 'index'){
        router.use(`/${name}`, require(`./${file}`)) // http://localhost: 300/api/tracks
    }
})

module.exports = router