const zomato = require('zomato');
const client = zomato.createClient({
  userKey: '0c59562c391a52cc08d01e55ca531294', //as obtained from [Zomato API](https://developers.zomato.com/apis)
});

class ZomatoController {
  static categories() {
    return new Promise((resolve, reject) => {
      client.getCategories(null, function (err, result) {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }

  static cities() {
    return new Promise((resolve, reject) => {
      client.getRestaurant({
        res_id : "7423814"
      }, function (err, result) {
        resolve(result)
      })
    })
  }

  static area(lat, lon) {
    return new Promise((resolve, reject) => {
      client.getGeocode({
        lat: lat,
        lon: lon
      }, function (err, result) {
        resolve(result)
      })
    })
  }
}

module.exports = ZomatoController