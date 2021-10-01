const {Troublescore} = require('../models/models')
const ApiError = require('../error/ApiError');

class TroublescoreController {
    async create(req, res) {
        const {name} = req.body
        const troublescore = await Troublescore.create({name})
        return res.json(troublescore)
    }

    async getAll(req, res) {
        const troublescores = await Troublescore.findAll()
        return res.json(troublescores)
    }

    async delete(req, res) { //удаление
        const {id} = req.params
        const troublescore = await Troublescore.destroy({
            where: {id}
        })
        return res.json(troublescore)
    }
}

module.exports = new TroublescoreController()