const Router = require('express')
const router = new Router()
const TroublescoreController = require('../controllers/troublescoreController')
const checkRole = require('../midlleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), TroublescoreController.create)
router.get('/', TroublescoreController.getAll)
router.delete('/:id', TroublescoreController.delete) //удалять

module.exports = router