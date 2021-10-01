const Router = require('express')
const router = new Router()
const serviceRouter = require ('./serviceRouter.js')
const userRouter = require ('./userRouter.js')
const troublescoreRouter = require ('./troublescoreRouter.js')
const typeRouter = require ('./typeRouter.js')
const basketRouter = require ('./basketRouter.js')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/troublescore', troublescoreRouter)
router.use('/service', serviceRouter)


module.exports = router