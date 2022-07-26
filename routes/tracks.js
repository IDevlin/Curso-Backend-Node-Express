const express = require('express');
const { getItems, createItem} = require('../controllers/tracks');
const router = express.Router();


// TODO CRUD htp://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems);
router.post("/", createItem);
 


module.exports = router;
