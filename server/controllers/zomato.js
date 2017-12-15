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
        let counter = 0;
        let arrResult = []
        parsJson.nearby_restaurants.forEach(function (dataRestaurant) {
          let dataCuisines = dataRestaurant.restaurant.cuisines.toLowerCase()
          array.forEach(foods => {
            
            if(dataCuisines.indexOf(foods) !== -1){
              arrResult.push(dataRestaurant.restaurant)
              counter++;
            }
          })
        });
        if (counter == 0) {
          res.send('')
        } else {
          console.log(arrResult)
          res.send(arrResult)
        }
      })
      .catch(err => {console.log(err)})
  }

}

module.exports = ZomatoController