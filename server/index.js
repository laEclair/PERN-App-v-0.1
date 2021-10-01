require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('express-fileupload')
const fileUpload = require('cors')
const router = require('./routes/index')
const errorHandler = require('./midlleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
//обработка ошибок, последний миддлвэйр
app.use(errorHandler)  //ошибка всегда в конце




const start = async () => {
    try {
        await sequelize.authenticate() // подключаюсь к базе данных
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    } catch (e) {     // отслеживаю ошибки
        console.log(e)
    }
}

start()