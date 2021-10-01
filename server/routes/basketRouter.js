const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const checkRole = require('../midlleware/checkRoleMiddleware')



router.post('/', checkRole('ADMIN'), basketController.create)
router.get('/', basketController.getAll)
router.delete('/:id', basketController.delete) //удалять

module.exports = router