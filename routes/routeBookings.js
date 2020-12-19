const router = require('express').Router()
const controller = require('../controllers/controllerBookings')
const authorized = require('../middleware/autorization')
const check_room_date = require('../middleware/check_available_room')
const check_room_capacity = require('../middleware/check_room_capacity')

router.get('/', controller.get)
router.get('/myBooking', controller.getByUser)
router.put('/myBooking', authorized, controller.updateCheckIn)
router.delete('/myBooking', authorized, controller.delete)
router.post('/newBook', check_room_date, check_room_capacity, controller.create)

module.exports = router