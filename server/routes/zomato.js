const express = require('express');
const router = express.Router();
const Zomato = require('../controllers/zomato')

router.get('/', Zomato.getAreaRestaurant)
router.get('/cities', Zomato.getCities)
router.get('/area', Zomato.getArea)

module.exports = router;