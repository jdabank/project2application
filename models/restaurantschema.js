const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restSchema = new Schema({
  name: String,
  location: String,
  price: String,
  food:
    [
      {
      name: String,
      price: Number,
      rating: {type: Number, min: 0, max: 10},
      spicy: Boolean,
      full: Boolean,
    }
  ]
})

const restCollection = mongoose.model('Restaurant', restSchema)
module.exports = restCollection

// {
//   name: 'Hana Asian Bistro',
//   location: 'Ozone Park, NY',
//   price: '$$',
//   food: [
//     {
//       name: 'Valentine Roll',
//       price: 17.50 * 1.08875,
//       rating: 9,
//       spicy: true,
//       full: true
//     }
