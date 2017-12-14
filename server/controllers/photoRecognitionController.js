const {predict} = require('../models/photoRecognitionModel')

class photoRecognitionController {
	static search(req, res){
		predict(req.body.link, (err, response)=>{
			console.log('Di controller', err, response)
			if (err) {
				res.status(400).json({
					message: 'Error occured',
					data : err
				})
			} else {				
				res.status(200).json({
					message: 'Photo predicted',
					data: response.outputs[0].data.concepts
				})
			}
		})
	}
}

module.exports = photoRecognitionController;