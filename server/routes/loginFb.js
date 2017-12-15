const express = require('express');
const router = express.Router();
const fbController = require('../controllers/loginFbController');

/* GET home page. */

router.post('/', fbController.login)

// router.post('/user', fbController.getUser)

module.exports = router;
