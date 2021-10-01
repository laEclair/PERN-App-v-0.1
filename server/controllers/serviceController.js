const uuid = require('uuid')
const path = require('path');
const {Service, ServiceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ServiceController {
    async create(req, res) {
        try {
            let {name, price, troublescoreId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
     
            const service = await Service.create({name, price, troublescoreId, typeId, info, img:fileName})

            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                    ServiceInfo.create({
                        title: i.title, 
                        description: i.description,
                        serviceId: service.id
                    })
                    )
            }

     
            return res.json(service)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
       
    }

    async getAll(req, res) {
        let {troublescoreId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9 
        let offset = page * limit - limit
        let services;
        if (!troublescoreId && !typeId) {
            services = await Service.findAndCountAll({limit, offset})
        }

        if(troublescoreId && !typeId) {
            services = await Service.findAndCountAll({where:{troublescoreId, limit, offset}})
        }

        if(!troublescoreId && typeId) {
            services = await Service.findAndCountAll({where:{typeId, limit, offset}})
        }

        if(troublescoreId && typeId) {
            services = await Service.findAndCountAll({where:{typeId, troublescoreId, limit, offset}})
        }
        return res.json(services)
    }

    async getOne(req, res) { 
       const {id} = req.params
       const service = await Service.findOne(
           {where:{id},
            include:[{model: ServiceInfo, as: 'info'}]

            },
        )
        return res.json(service)
    }

    async delete(req, res) { //Удаление
            const {id} = req.params
            const service = await Service.destroy({
                where: {id}
            })
            return res.json(service)
        
    }
}

module.exports = new ServiceController()