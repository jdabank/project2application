const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restSchema = new Schema({
  name: String,
  location: String,
  price: String,
  food: [
    {
      name: String,
      price: Number * 1.08875,
      rating: Number,
      spicy: Boolean,
      full: Boolean,
    }
  ]
})

const restCollection = mongoose.model('Restaurant', restSchema)
module.exports = restCollection
