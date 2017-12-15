var unirest = require('unirest');

const analyze = (data, callback) => {
	console.log(`text=${data}`, typeof data)
	unirest.post("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/detect")
	.header("X-Mashape-Key", "OgLdxxHBAWmshvGJF7aU7wFeS0NFp1GWS7ljsn5JjZ1Pnyxavq")
	.header("Content-Type", "application/x-www-form-urlencoded")
	.header("Accept", "application/json")
	.send(`text=${data}`)
	.end(function (result) {
	  callback(result);
	  // result.status, result.headers, result.body
	});
}

module.exports = {analyze}