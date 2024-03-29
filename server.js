//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const Restaurant = require('./models/restaurantschema.js');
const seedData = require('./models/restaurants.js');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI, () => {
  console.log('Praying to monGod...')
})



// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: true }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//___________________
//localhost:3000
// app.get('/restaurants/seed', (req, res) => {
//   Restaurant.create(seedData, (err, createdData) => {
//     console.log('Added restaurants')
//   })
//   res.redirect('/restaurants')
// })

app.post('/restaurants', (req, res) => {
  Restaurant.create(req.body, (err, madeRest) => {
    res.redirect('/restaurants')
  })
})

app.post('/restaurants/:id', (req, res) => {
  Restaurant.create(req.body, (err, madeRest) => {
    res.redirect('/restaurants')
  })
})

app.get('/restaurants/:id/new', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurants) => {
    res.render('newfood.ejs', {restaurants: restaurants})
  })
})

app.get('/restaurants/new', (req, res) => {
  res.render('newres.ejs')
})

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.put('/restaurants/:id', (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, rest) => {
    res.redirect('/restaurants')
  })
})

app.get('/restaurants/:id/edit', (req, res) => {
  Restaurant.findById(req.params.id, (err, foundRest) => {
    res.render('editres.ejs', {restaurants: foundRest})
  })
})

app.get('/restaurants', (req, res) => {
  Restaurant.find({}, (err, allRest) => {
  res.render('restaurants.ejs', {restaurants: allRest})
})
})

app.get('/restaurants/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurants) => {
    res.render('restaurantshowpage.ejs', {restaurants: restaurants})
  })
})

app.delete('/restaurants/:id', (req, res) => {
  Restaurant.findByIdAndRemove(req.params.id, (err, deleteRes) => {
    res.redirect('/restaurants')
  })
})

app.get('/restaurants/:id/:index', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    res.render('foodshowpage.ejs', {restaurants: restaurant, index: req.params.index})
  })
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
