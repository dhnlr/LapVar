const express = require('express');
const router = express.Router();
const Zomato = require('../controllers/zomato')
const authFB = require('../middelware/checkLogin')

router.get('/', authFB, Zomato.getAreaRestaurant)
router.get('/cities', Zomato.getCities)
router.get('/area', Zomato.getArea)

module.exports = router;