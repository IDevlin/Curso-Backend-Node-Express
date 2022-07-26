const {createItem} = require('../controllers/tracks');
const express = require('express');
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")


router.post("/", uploadMiddleware.single("myfile"), createItem)

module.exports = router;