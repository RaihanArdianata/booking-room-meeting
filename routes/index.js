const routes = require('express').Router()
const Rooms = require('./routeRooms')
const Bookings = require('./routeBookings')
const Users = require('./routeUsers')

const autentication = require('../middleware/autentication')


routes.use('/user', Users)
routes.use(autentication)
routes.use('/rooms', Rooms)
routes.use('/booking', Bookings)

module.exports = routes