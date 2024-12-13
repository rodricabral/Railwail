const { Sequelize } = require('sequelize')

const dBconnection = new Sequelize(process.env.MYSQL_URL, {
    dialect: 'mysql',
    logging: false
})

module.exports = { dBconnection }