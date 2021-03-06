const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../midlleware/checkRoleMiddleware')



router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.delete('/:id', typeController.delete) //удалять

module.exports = router