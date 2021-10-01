const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,}, ///////////////////////
    password: {type: DataTypes.STRING},
    role: {type: DataTypes. STRING, defaultValue: "USER"},
})

const Basket = sequelize.define( 'basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketService = sequelize.define( 'basket_service', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Service = sequelize.define( 'service', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define( 'type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Troublescore = sequelize.define( 'troublescore', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define( 'rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER,  allowNull: false},
})

const ServiceInfo = sequelize.define( 'service_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})


const TypeTroublescore = sequelize.define('type_troublescore', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketService)
BasketService.belongsTo(Basket)

Type.hasMany(Service)
Service.belongsTo(Type)

Troublescore.hasMany(Service)
Service.belongsTo(Troublescore)

Service.hasMany(Rating)
Rating.belongsTo(Service)

Service.hasMany(Basket)
BasketService.belongsTo(Service)

Service.hasMany(ServiceInfo, {as: 'info'})
ServiceInfo.belongsTo(Service)


Type.belongsToMany(Troublescore, {through: TypeTroublescore })
Troublescore.belongsToMany(Type, {through: TypeTroublescore })

module.exports = {
    User, 
    Basket,
    BasketService,
    Service,
    Type,
    Troublescore,
    Rating,
    TypeTroublescore,
    ServiceInfo 
}