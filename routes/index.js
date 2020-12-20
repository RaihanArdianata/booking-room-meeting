const routes = require('express').Router()
const Rooms = require('./routeRooms')
const Bookings = require('./routeBookings')
const Users = require('./routeUsers')

const autentication = require('../middleware/autentication')


routes.use('/user', Users)
routes.use('/rooms',autentication, Rooms)
routes.use('/booking',autentication, Bookings)

module.exports = routes