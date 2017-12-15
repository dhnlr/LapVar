const {predict} = require('../models/photoRecognitionModel')

class photoRecognitionController {
	static search(req, res, next){
		predict(req.body.link, (err, response)=>{
			console.log('Di controller', err, response)
			if (err) {
				res.status(400).json({
					message: 'Error occured',
					data : err
				})
			} else {
				let foodList = [];
				for (var i = 0; i <= 10; i++) {
					foodList.push(response.outputs[0].data.concepts[i].name)
				}
				req.headers.foodList = foodList;
				res.status(200).json({
					message: 'Bisa',
					data : foodList
				})
				next()
			}
		})
	}
}

module.exports = photoRecognitionController;