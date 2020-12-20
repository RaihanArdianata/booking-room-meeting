const router = require('express').Router()
const controller = require('../controllers/controllerUsers')

router.get('/', controller.getAlluser)
router.post('/register', controller.register)
router.post('/login', controller.login)
router.delete('/:id', controller.delete)

module.exports = router