const Router = require('express')
const router = new Router()
const serviceController = require ('../controllers/serviceController')
const checkRole = require('../midlleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN') ,serviceController.create) //добавление // 
router.get('/', serviceController.getAll) // получение всех услуг
router.get('/:id', serviceController.getOne) // получение отдельной услуги
router.delete('/:id',checkRole('ADMIN'), serviceController.delete) //удалять

module.exports = router