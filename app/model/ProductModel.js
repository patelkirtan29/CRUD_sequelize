const { DataTypes } = require('sequelize');
const sequelize  = require('../config/dbConnection/postgresConnection');
const { OrderModel } = require('./OrderModel');
const { UserModel } = require('./DemoUserModel');


const ProductModel = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    productPrice: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    freezeTableName: true
});


module.exports = { ProductModel };

