const {analyze} = require('../models/foodAnalyzeModel')

class foodAnalyzeController {
	static search(req, res){
		analyze(req.headers.foodList, (data)=>{
			if (!data) {
				res.status(400).json({
					message: 'Error occured'
				})
			} else {
				let dish = []
				data.body.annotations.forEach( cuisine => {
					if (cuisine.tag == "dish") {
						dish.push(cuisine.annotation)
					}
				});
				req.headers.dish = dish
				res.status(200).json({
					message: 'Photo predicted',
					data: dish
				})
			}
		})
	}
}

module.exports = foodAnalyzeController;