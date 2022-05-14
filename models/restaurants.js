const restaurants = [
  {
    name: 'Hana Asian Bistro',
    location: 'Ozone Park, NY',
    price: '$$',
    food: [
      {
        name: 'Valentine Roll',
        price: 17.50 * 1.08875,
        rating: 9,
        spicy: true,
        full: true
      },
      {
        name: 'Chicken Basil Fried Rice',
        price: 13 * 1.08875,
        rating: 7,
        spicy: false,
        full: false
      },
      {
        name: 'Sushi & Sashimi for One',
        price: 32.95 * 1.08875,
        rating: 10,
        spicy: false,
        full: true
      }
      ]
    },
    {
      name: 'Chavela\'s',
      location: 'Brooklyn, NY',
      price: '$$',
      food: [
        {
          name: 'Huevos Rancheros',
          price: 15 * 1.08875,
          rating: 9,
          spicy: true,
          full: true
        },
        {
          name: 'Pescado Taco',
          price: 6 * 1.08875,
          rating: 7,
          spicy: false,
          full: false
        },
        {
          name: 'Huitlacoche',
          price: 8 * 1.08875,
          rating: 5,
          spicy: false,
          full: true
        }
      ]
    },
    {
      name: 'Abiko Curry',
      location: 'New York, NY',
      price: '$$',
      food: [
        {
          name: 'Shrimp Curry Rice',
          price: 14.99 * 1.08875,
          rating: 10,
          spicy: true,
          full: true
        },
        {
          name: 'Herb Chicken Curry Noodle',
          price: 13.99 * 1.08875,
          rating: 6,
          spicy: true,
          full: true
        },
        {
          name: 'Croquette',
          price: 2.99 * 1.08875,
          rating: 8,
          spicy: false,
          full: false
        }
        ]
      },
      {
        name: 'Taco Bell',
        location: 'Woodside, NY',
        price: '$',
        food: [
          {
            name: 'Chicken Quesarito',
            price: 5.99 * 1.08875,
            rating: 8,
            spicy: true,
            full: true
          },
          {
            name: 'Bean Burrito',
            price: 2.99 * 1.08875,
            rating: 8,
            spicy: false,
            full: false
          },
          {
            name: 'Chicken Quesadilla',
            price: 5.69 * 1.08875,
            rating: 7,
            spicy: false,
            full: false
          }
          ]
        }
]

module.exports = restaurants
