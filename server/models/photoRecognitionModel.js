const Clarifai = require('clarifai');
const app = new Clarifai.App({
 apiKey: 'fad9ac477b1a43b68301156f2f97064c'
});

const predict = (link, callback) => {
	console.log('Masuk')
	app.models.predict('bd367be194cf45149e75f01d59f77ba7', link).then(
	  function(response) {
	    callback(null, response);
	  },
	  function(err) {
	    callback(err, null);
	  }
	);
}

module.exports = {predict}