const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection/postgresConnection');
const { ProductModel } = require('./ProductModel');

const OrderModel = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dateofOrder: {
        type: DataTypes.DATEONLY
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Product",
            key: "id"
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "DemoUser",
            key: "id"
        }
    }

}, {
    freezeTableName: true
});


// OrderModel.belongsTo(sequelize.models.Product, { foreignKey: 'productId' });
// OrderModel.belongsTo(sequelize.models.DemoUser, { foreignKey: 'userId' });

// OrderModel.belongsToMany(sequelize.models.Product, { foreignKey: 'productId', through: { model: OrderModel } });
module.exports = { OrderModel };
