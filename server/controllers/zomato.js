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
        console.log(array, 'Ini array')
        let parsJson = parsJson.nearby_restaurants.filter( restaurant =>{
          console.log('>>>>>>>',restaurant.cuisines, array)
          for (cuisine of restaurant.cuisines) {
            if (array.indexOf(cuisine) >= 0) {
              return true
            }
          }
          return false
        })
        // let array = ['burger', 'sushi', 'salmon']
        /*parsJson.nearby_restaurants.forEach(function (dataRestaurant) {
          let dataCuisines = dataRestaurant.restaurant.cuisines.toLowerCase()
          array.forEach(foods => {
            if(dataCuisines.indexOf(foods) !== -1){
              res.send(parsJson.nearby_restaurants)
            }
          })
          
        }, this)*/;
        
      })
      .catch(err => {console.log(err)})
  }

}

module.exports = ZomatoController