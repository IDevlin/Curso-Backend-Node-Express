const express = require('express');
const { getItems, getItem } = require('../controllers/tracks');
const router = express.Router();


// TODO CRUD htp://localhost/tracks GET, POST, DELETE, PUT

router.get('/', getItems);
router.get('/:id', getItem);

module.exports = router
