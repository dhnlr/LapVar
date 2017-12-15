var express = require('express');
var router = express.Router();
var photoRecognitionController = require('../controllers/photoRecognitionController')

/* GET users listing. */
router.post('/', photoRecognitionController.search);

module.exports = router;