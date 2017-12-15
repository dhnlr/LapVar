const express = require('express');
const router = express.Router();
const zomatoModel = require('../models/zomato')

class ZomatoController {
  static getCities(req, res) {
    zomatoModel.cities()
      .then(result => {
        res.send(JSON.parse(result))
      })
  }

  static getArea(req, res) {
    zomatoModel.area()
      .then(result => {
        res.send(JSON.parse(result))
      })
  }

  static getAreaRestaurant(req, res) {
    zomatoModel.area(req.query.lat, req.query.lng)
      .then(result => {
        let parsJson = JSON.parse(result)
        let array = req.query.food.split(',')

        // let array = ['burger']
        parsJson.nearby_restaurants.forEach(function (dataRestaurant) {
          let dataCuisines = dataRestaurant.restaurant.cuisines.toLowerCase()

          if(dataCuisines.indexOf(array[0]) !== -1){
            res.send(parsJson.nearby_restaurants)
          }
        }, this);
        
      })
      .catch(err => {console.log(err)})
  }

}

module.exports = ZomatoController