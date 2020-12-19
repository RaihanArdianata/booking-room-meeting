const router = require('express').Router()
const controller = require('../controllers/controllerRooms')

router.get('/', controller.get)

module.exports = router